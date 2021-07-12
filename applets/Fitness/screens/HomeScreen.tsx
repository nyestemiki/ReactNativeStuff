import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../../constants/fitness'
import { Card, Header, Search } from '../components'

const ListHeader = ({ title }: { title: String }) => {
	return (
		<View
			style={{
				padding: SIZES.padding,
				flex: 1,
				marginTop: SIZES.padding
			}}
		>
			<Text style={{ ...FONTS.h2, fontWeight: 'bold', color: COLORS.gray }}>{title}</Text>
		</View>
	)
}

const HomeScreen = () => {
	return (
		<View style={{ paddingTop: SIZES.padding / 2, backgroundColor: COLORS.white, flex: 1 }}>
			<Header
				leftIcon={icons.menu}
				onLeftIconPressed={() => {}}
				title='Browse'
				rightIcon={icons.bell}
				onRightIconPressed={() => {}}
			/>
			<ScrollView  >
				<View style={{marginBottom: 130}}>
					<Search />

					<ListHeader title='Top workouts 💪' />
					<FlatList
						data={dummyData.topWorkouts}
						keyExtractor={item => `top_workout-${item.id}`}
						showsHorizontalScrollIndicator={false}
						snapToAlignment='start'
						snapToInterval={SIZES.width * 0.9}
						decelerationRate='fast'
						keyboardDismissMode='on-drag'
						horizontal
						renderItem={({ item, index }) => (
							<Card
								workout={item}
								containerStyle={{ marginLeft: index === 0 ? SIZES.padding : 0 }}
							/>
						)}
					/>

					<ListHeader title='Categories' />
					<FlatList
						data={dummyData.categories}
						keyExtractor={item => `category-${item.id}`}
						horizontal
						keyboardDismissMode='on-drag'
						showsHorizontalScrollIndicator={false}
						snapToAlignment='start'
						snapToInterval={SIZES.width / 3 + SIZES.padding}
						decelerationRate='fast'
						renderItem={({ item, index }) => {
							return (
								<TouchableOpacity
									style={{
										backgroundColor: item.color,
										borderRadius: SIZES.radius,
										marginRight: SIZES.padding,
										marginLeft: index === 0 ? SIZES.padding : 0,
										width: SIZES.width / 3,
										height: 220
									}}
								>
									<ImageBackground
										source={item.image}
										style={{
											width: '100%',
											height: 220,
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text
											style={{
												color: COLORS.white,
												...FONTS.body2,
												fontWeight: 'bold',
												textAlign: 'center'
											}}
										>
											{item.name}
										</Text>
									</ImageBackground>
								</TouchableOpacity>
							)
						}}
					/>
				</View>
			</ScrollView>
		</View>
	)
}

export default HomeScreen
