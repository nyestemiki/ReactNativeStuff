import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Animated, Platform } from 'react-native'
import { BlurView } from 'expo-blur'
import { SIZES, FONTS, COLORS, icons } from '../../../constants/foodRecipe'
import { StatusBar } from 'expo-status-bar'
import { Viewers } from '../components'

const HEADER_HEIGHT = 350

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
			<View style={{ width: 40, height: 40, marginLeft: 20 }}>
				<Image
					source={selectedRecipe?.author?.profilePic}
					style={{ width: 40, height: 40, borderRadius: 20 }}
				/>
			</View>

			<View style={{ flex: 1, marginHorizontal: 20 }}>
				<Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>Recipe By</Text>
				<Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
					{selectedRecipe?.author?.name}
				</Text>
			</View>

			<TouchableOpacity
				style={{
					width: 30,
					height: 30,
					alignItems: 'center',
					justifyContent: 'center',
					marginRight: 20,
					borderRadius: 5,
					borderWidth: 1,
					borderColor: COLORS.lightGreen1
				}}
				onPress={() => {}}
			>
				<Image
					source={icons.rightArrow}
					style={{
						width: 15,
						height: 15,
						tintColor: COLORS.lightGreen1
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
	return Platform.OS === 'ios' ? (
		<BlurView style={{ flex: 1, borderRadius: SIZES.radius }} tint='dark'>
			<RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
		</BlurView>
	) : (
		<View
			style={{
				flex: 1,
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.transparentBlack9
			}}
		>
			<RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
		</View>
	)
}

const Recipe = ({ navigation, route }) => {
	const [selectedRecipe, setSelectedRecipte] = useState(null)
	const scrollY = useRef(new Animated.Value(0)).current

	useEffect(() => {
		setSelectedRecipte(route.params.recipe)
	}, [])

	const renderRecipeCardHeader = () => {
		return (
			<View
				style={{
					alignItems: 'center',
					overflow: 'hidden',
					backgroundColor: COLORS.black,
					marginTop: -1000,
					paddingTop: 1000
				}}
			>
				<Animated.Image
					source={selectedRecipe?.image}
					resizeMode='contain'
					style={{
						height: HEADER_HEIGHT,
						width: '200%',
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
									outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
								})
							},
							{
								scale: scrollY.interpolate({
									inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
									outputRange: [2, 1, 0.75]
								})
							}
						]
					}}
				/>

				<Animated.View
					style={{
						position: 'absolute',
						bottom: 10,
						left: 30,
						right: 30,
						height: 80,
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [0, 170, 250],
									outputRange: [0, 0, 100],
									extrapolate: 'clamp'
								})
							}
						]
					}}
				>
					<RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
				</Animated.View>
			</View>
		)
	}

	const renderHeaderBar = () => {
		return (
			<View
				style={{
					position: 'absolute',
					top: 10,
					left: 0,
					right: 0,
					height: 90,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: SIZES.padding,
					paddingBottom: 10
				}}
			>
				<Animated.View
					style={{
						position: 'absolute',
						top: -10,
						left: 0,
						right: 0,
						bottom: 10,
						backgroundColor: COLORS.black,
						opacity: scrollY.interpolate({
							inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
							outputRange: [0, 1]
						})
					}}
				/>

				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						alignItems: 'center',
						justifyContent: 'center',
						paddingBottom: 10,
						opacity: scrollY.interpolate({
							inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
							outputRange: [0, 1]
						}),
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
									outputRange: [50, 0],
									extrapolate: 'clamp'
								})
							}
						]
					}}
				>
					<Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>Recipe By:</Text>
					<Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
						{selectedRecipe?.author?.name}
					</Text>
				</Animated.View>

				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 35,
						width: 35,
						borderRadius: 18,
						borderWidth: 1,
						borderColor: COLORS.lightGray,
						backgroundColor: COLORS.transparentBlack5
					}}
					onPress={() => {
						navigation.goBack()
					}}
				>
					<Image
						source={icons.back}
						style={{ width: 15, height: 15, tintColor: COLORS.lightGray }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 35,
						width: 35
					}}
				>
					<Image
						source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
						style={{ width: 30, height: 30, tintColor: COLORS.darkGreen }}
					/>
				</TouchableOpacity>
			</View>
		)
	}

	const renderRecipeInfo = () => {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 130,
					width: SIZES.width,
					paddingHorizontal: 30,
					paddingVertical: 20,
					alignItems: 'center'
				}}
			>
				<View style={{ flex: 1.5, justifyContent: 'center' }}>
					<Text style={{ ...FONTS.h2, fontWeight: 'bold' }}>{selectedRecipe?.name}</Text>
					<Text style={{ marginTop: 5, color: COLORS.lightGray2, ...FONTS.body4 }}>
						{selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
					</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Viewers viewersList={selectedRecipe?.viewers} />
				</View>
			</View>
		)
	}

	const renderIngredientHeader = () => {
		return (
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: 30,
					marginTop: SIZES.radius,
					marginBottom: SIZES.padding
				}}
			>
				<Text style={{ flex: 1, ...FONTS.h3, fontWeight: 'bold' }}>Ingredients</Text>
				<Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
					{selectedRecipe?.ingredients.length} items
				</Text>
			</View>
		)
	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white
			}}
		>
			<StatusBar style='light' />
			<Animated.FlatList
				data={selectedRecipe?.ingredients}
				keyExtractor={item => `${item.id}`}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{renderRecipeCardHeader()}
						{renderRecipeInfo()}
						{renderIngredientHeader()}
					</View>
				}
				scrollEventThrottle={16}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
					useNativeDriver: true
				})}
				renderItem={({ item }) => (
					<View
						style={{ flexDirection: 'row', paddingHorizontal: 30, marginVertical: 5 }}
					>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 50,
								width: 50,
								borderRadius: 5,
								backgroundColor: COLORS.lightGray
							}}
						>
							<Image source={item.icon} style={{ width: 40, height: 40 }} />
						</View>
						<View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
							<Text style={{ ...FONTS.body3, fontWeight: '700' }}>
								{item.description}
							</Text>
						</View>
						<View
							style={{
								alignItems: 'flex-end',
								justifyContent: 'center'
							}}
						>
							<Text style={{ ...FONTS.body3, fontWeight: 'bold' }}>
								{item.quantity}
							</Text>
						</View>
					</View>
				)}
				ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
			/>
			{renderHeaderBar()}
		</View>
	)
}

export default Recipe
