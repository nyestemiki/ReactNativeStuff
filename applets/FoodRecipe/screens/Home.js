import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	SafeAreaView,
	TextInput,
	FlatList
} from 'react-native'
import { COLORS, icons, SIZES, images, dummyData, FONTS } from '../../../constants/foodRecipe'
import { CategoryCard, TrendingCard } from '../components'

const Home = ({ navigation }) => {
	const renderHeader = (name = 'Miki') => {
		return (
			<View
				style={{
					flexDirection: 'row',
					marginHorizontal: SIZES.padding,
					alignItems: 'center',
					height: 80
				}}
			>
				<View style={{ flex: 1 }}>
					<Text style={{ color: COLORS.darkGreen, ...FONTS.h2, fontWeight: 'bold' }}>
						Hello {name},
					</Text>
					<Text
						style={{
							marginTop: 3,
							color: COLORS.gray,
							...FONTS.body3,
							fontWeight: 'bold'
						}}
					>
						What do you want to cook today?
					</Text>
				</View>

				<TouchableOpacity onPress={() => {}}>
					<Image
						source={images.profile}
						style={{ width: 40, height: 40, borderRadius: 20 }}
					/>
				</TouchableOpacity>
			</View>
		)
	}

	const renderSearchBar = () => {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 50,
					alignItems: 'center',
					marginHorizontal: SIZES.padding,
					paddingHorizontal: SIZES.radius,
					borderRadius: 10,
					color: COLORS.lightGray
				}}
			>
				<Image
					source={icons.search}
					style={{ width: 20, height: 20, tintColor: COLORS.gray }}
				/>

				<TextInput
					style={{ marginLeft: SIZES.radius, ...FONTS.body3 }}
					placeholderTextColor={COLORS.gray}
					placeholder='Search Recipes'
				/>
			</View>
		)
	}

	const renderSeeRecipeCard = (nrRecipes = 12) => {
		return (
			<View
				style={{
					flexDirection: 'row',
					marginTop: SIZES.padding,
					marginHorizontal: SIZES.padding,
					borderRadius: 10,
					backgroundColor: COLORS.lightGreen
				}}
			>
				<View style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}>
					<Image source={images.recipe} style={{ width: 80, height: 80 }} />
				</View>

				<View style={{ flex: 1, paddingVertical: SIZES.radius }}>
					<Text style={{ width: '70%', ...FONTS.body4, fontWeight: 'bold' }}>
						You have {nrRecipes} that you haven't tried yet
					</Text>
					<TouchableOpacity style={{ marginTop: 10 }} onPress={() => {}}>
						<Text
							style={{
								color: COLORS.darkGreen,
								textDecorationLine: 'underline',
								...FONTS.h4,
								fontWeight: 'bold'
							}}
						>
							See Recipes
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	const renderTrendingSection = () => {
		return (
			<View style={{ marginTop: SIZES.padding }}>
				<Text style={{ marginHorizontal: SIZES.padding, ...FONTS.h2, fontWeight: 'bold' }}>
					Trending Recipe
				</Text>

				<FlatList
					data={dummyData.trendingRecipes}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => `${item.id}`}
					renderItem={({ item, index }) => {
						return (
							<TrendingCard
								recipeItem={item}
								containerStyle={{ marginLeft: index === 0 ? SIZES.padding : 0 }}
								onPress={() => {
									navigation.navigate('Recipe', { recipe: item })
								}}
							/>
						)
					}}
				/>
			</View>
		)
	}

	const renderCategoryHeader = () => {
		return (
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 20,
					marginHorizontal: SIZES.padding
				}}
			>
				<Text style={{ flex: 1, ...FONTS.h2, fontWeight: 'bold' }}>Categoties</Text>
				<TouchableOpacity>
					<Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
				</TouchableOpacity>
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: SIZES.padding * 2 }}
		>
			<FlatList
				data={dummyData.categories}
				keyExtractor={item => `${item.id}`}
				keyboardDismissMode='on-drag'
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{renderHeader()}
						{renderSearchBar()}
						{renderSeeRecipeCard()}
						{renderTrendingSection()}
						{renderCategoryHeader()}
					</View>
				}
				renderItem={({ item }) => {
					return (
						<CategoryCard
							containerStyle={{ marginHorizontal: SIZES.padding }}
							categoryItem={item}
							onPress={() => {
								navigation.navigate('Recipe', { recipe: item })
							}}
						/>
					)
				}}
				ListFooterComponent={<View style={{ marginBottom: 100 }} />}
			/>
		</SafeAreaView>
	)
}

export default Home
