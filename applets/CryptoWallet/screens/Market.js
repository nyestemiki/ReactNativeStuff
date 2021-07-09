import React, { useEffect, createRef, useRef, useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, Animated, FlatList, Image } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { connect } from 'react-redux'
import { COLORS, constants, FONTS, icons, SIZES } from '../../../constants/cryptoWallet'
import { getCoinMarket } from '../../../store/market/marketActions'
import { HeaderBar, TextButton } from '../components'
import MainLayout from './MainLayout'

const marketTabs = constants.marketTabs.map(marketTab => ({
	...marketTab,
	ref: createRef()
}))

const TabIndicator = ({ measureLayout, scrollX }) => {
	const inputRange = marketTabs.map((_, i) => i * SIZES.width)
	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout.map(measure => measure.x)
	})

	return (
		<Animated.View
			style={{
				position: 'absolute',
				left: 0,
				height: '100%',
				width: (SIZES.width - SIZES.radius * 2) / 2,
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.lightGray,
				transform: [{ translateX }]
			}}
		/>
	)
}

const Tabs = ({ scrollX, onMarketTabPress }) => {
	const [measureLayout, setMeasureLayout] = useState([])

	const containerRef = useRef()

	useEffect(() => {
		const ml = []

		marketTabs.forEach(marketTab => {
			marketTab?.ref?.current?.measureLayout(containerRef.current, (x, y, width, height) => {
				ml.push({ x, y, width, height })

				if (ml.length === marketTabs.length) {
					setMeasureLayout(ml)
				}
			})
		})
	}, [containerRef.current])

	return (
		<View ref={containerRef} style={{ flexDirection: 'row' }}>
			{measureLayout.length > 0 && (
				<TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
			)}

			{marketTabs.map((item, index) => {
				return (
					<TouchableOpacity
						key={`MarketTab-${index}`}
						style={{ flex: 1 }}
						onPress={() => {
							onMarketTabPress(index)
						}}
					>
						<View
							ref={item.ref}
							style={{
								paddingHorizontal: 15,
								alignItems: 'center',
								justifyContent: 'center',
								height: 40
							}}
						>
							<Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.title}</Text>
						</View>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

const Market = ({ getCoinMarket, coins }) => {
	const scrollX = useRef(new Animated.Value(0)).current

	const marketTabScrollViewRef = useRef()

	const onMarketTabPress = useCallback(marketTabIndex => {
		marketTabScrollViewRef?.current?.scrollToOffset({ offset: marketTabIndex * SIZES.width })
	})

	useEffect(() => {
		getCoinMarket()
	}, [])

	const renderTabBar = () => {
		return (
			<View
				style={{
					marginTop: SIZES.radius,
					marginHorizontal: SIZES.radius,
					borderRadius: SIZES.radius,
					backgroundColor: COLORS.gray
				}}
			>
				<Tabs scrollX={scrollX} onMarketTabPress={onMarketTabPress} />
			</View>
		)
	}

	const renderButtons = () => {
		return (
			<View
				style={{
					flexDirection: 'row',
					marginTop: SIZES.radius,
					marginHorizontal: SIZES.radius
				}}
			>
				<TextButton label='USD' onPress={() => {}} />
				<TextButton
					label='% (7d)'
					onPress={() => {}}
					containerStyle={{ marginLeft: SIZES.base }}
				/>
				<TextButton
					label='Top'
					onPress={() => {}}
					containerStyle={{ marginLeft: SIZES.base }}
				/>
			</View>
		)
	}

	const renderList = () => {
		return (
			<Animated.FlatList
				ref={marketTabScrollViewRef}
				data={marketTabs}
				contentContainerStyle={{ marginTop: SIZES.padding }}
				horizontal
				pagingEnabled
				scrollEventThrottle={16}
				snapToAlignment='center'
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item.id.toString()}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: false
				})}
				renderItem={({ item, index }) => {
					return (
						<View style={{ flex: 1, width: SIZES.width }}>
							<FlatList
								data={coins}
								keyExtractor={item => item.id.toString()}
								renderItem={({ item, index }) => {
									const priceColor =
										item.price_change_percentage_7d_in_currency === 0
											? COLORS.lightGray3
											: item.price_change_percentage_7d_in_currency > 0
											? COLORS.lightGreen
											: COLORS.red

									return (
										<View
											style={{
												flexDirection: 'row',
												paddingHorizontal: SIZES.padding,
												marginBottom: SIZES.radius
											}}
										>
											<View
												style={{
													flex: 1.15,
													flexDirection: 'row',
													alignItems: 'center'
												}}
											>
												<Image
													source={{ uri: item.image }}
													style={{ height: 20, width: 20 }}
												/>

												<Text
													style={{
														marginLeft: SIZES.radius,
														color: COLORS.white,
														...FONTS.h3
													}}
												>
													{item.name}
												</Text>
											</View>

											<View style={{ flex: 1, alignItems: 'center' }}>
												<LineChart
													withVerticalLabels={false}
													withHorizontalLabels={false}
													withDots={false}
													withInnerLines={false}
													withVerticalLines={false}
													withOuterLines={false}
													data={{
														datasets: [
															{ data: item.sparkline_in_7d.price }
														]
													}}
													width={100}
													height={60}
													chartConfig={{
														color: () => priceColor
													}}
													bezier
													style={{ paddingRight: 0 }}
												/>
											</View>
											<View
												style={{
													flex: 1,
													alignItems: 'flex-end',
													justifyContent: 'center'
												}}
											>
												<Text style={{ color: COLORS.white, ...FONTS.h4 }}>
													$ {item.current_price}
												</Text>

												<View
													style={{
														flexDirection: 'row',
														justifyContent: 'flex-end',
														alignItems: 'center'
													}}
												>
													{item.price_change_percentage_7d_in_currency !==
														0 && (
														<Image
															source={icons.upArrow}
															style={{
																height: 10,
																width: 10,
																tintColor: priceColor,
																transform:
																	item.price_change_percentage_7d_in_currency >
																	0
																		? [{ rotate: '45deg' }]
																		: [{ rotate: '125deg' }]
															}}
														/>
													)}

													<Text
														style={{
															marginLeft: 5,
															color: priceColor,
															...FONTS.body5
														}}
													>
														{item.price_change_percentage_7d_in_currency.toFixed(
															2
														)}
														%
													</Text>
												</View>
											</View>
										</View>
									)
								}}
							/>
						</View>
					)
				}}
			/>
		)
	}

	return (
		<MainLayout>
			<View style={{ flex: 1, backgroundColor: COLORS.black }}>
				<HeaderBar title='Market' />
				{renderTabBar()}
				{renderButtons()}
				{renderList()}
			</View>
		</MainLayout>
	)
}

function mapStateToProps(state) {
	return {
		coins: state.marketReducer.coins
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) =>
			dispatch(
				getCoinMarket(
					currency,
					coinList,
					orderBy,
					sparkline,
					priceChangePerc,
					perPage,
					page
				)
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Market)
