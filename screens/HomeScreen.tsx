import React, { useCallback } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import AppCard from '../components/AppCard'
import { RootStackParamList } from '../types'
import images from '../constants/images'
import { BY } from '../components/AppCard/types'

export default ({ navigation }: StackScreenProps<RootStackParamList>) => {
	const go = useCallback(to => navigation.navigate(to), [navigation])

	return (
		<View style={styles.page}>
			<Text style={styles.title}>Applets</Text>
			<ScrollView>
				<View>
					<AppCard
						title='Hello World'
						description='Starter Application'
						img={images.hello}
						onPress={() => go('HelloWorld')}
						by={BY.ME}
					/>
					<AppCard
						title='Liquid Swipe'
						description='Liquid Swipe'
						img={images.liquidSwipe}
						onPress={() => go('LiquidSwipe')}
						by={BY.WILLIAM_CANDILLON}
					/>
					<AppCard
						title='Crypto Wallet'
						description='Wallet for Crypto Coins'
						img={images.coin}
						onPress={() => go('CryptoWallet')}
						by={BY.BY_PROGRAMMERS}
					/>
					<AppCard
						title='Milk Tea Shop'
						description='Shop app for Milk Tea'
						img={images.milkteashop}
						onPress={() => go('MilkTeaShop')}
						by={BY.BY_PROGRAMMERS}
					/>
					<AppCard
						title='Food Recipe App'
						description='Browse various receipes'
						img={images.food}
						onPress={() => go('FoodRecipe')}
						by={BY.BY_PROGRAMMERS}
					/>
					<AppCard
						title='Liquid Tab Bar'
						description='Animated tab bar navigation'
						img={images.navigation}
						onPress={() => go('LiquidTabBar')}
						by={BY.ME}
						wip
					/>
					<AppCard
						title='Movie Streaming'
						description='Movie Streaming App'
						img={images.streaming}
						onPress={() => go('MovieStreaming')}
						by={BY.BY_PROGRAMMERS}
					/>
					<AppCard
						title='Fitness'
						description='Fitness App'
						img={images.fitness}
						onPress={() => go('Fitness')}
						by={BY.ME}
					/>
					<AppCard
						title='Movies'
						description='Animated Flatlist'
						img={images.movies}
						onPress={() => go('Movies')}
						by={BY.OTHER}
						wip
					/>
					<AppCard
						title='Launcher'
						description='Launcher Design'
						img={images.launcher}
						onPress={() => go('Launcher')}
						by={BY.ME}
						wip
					/>
					<AppCard
						title='Donut Chart'
						description='Donut Chart animations'
						img={images.icon}
						onPress={() => go('DonutChart')}
						by={BY.OTHER}
						wip
					/>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		padding: 14,
		paddingBottom: 0,
		flex: 1,
		backgroundColor: '#000'
	},
	title: {
		fontSize: 50,
		color: '#efefef',
		marginVertical: 50
	}
})
