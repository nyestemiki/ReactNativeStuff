import * as React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, View, Text } from 'react-native'
import AppCard from '../components/AppCard'
import { RootStackParamList } from '../types'
import images from '../constants/images'

export default function HomedScreen({ navigation }: StackScreenProps<RootStackParamList, 'Home'>) {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Applets</Text>
			<View style={styles.container}>
				<AppCard
					title='Hello World'
					description='Starter Application'
					img={images.hello}
					to='HelloWorld'
					navigation={navigation}
				/>
				<AppCard
					title='Liquid Swipe'
					description='Liquid Swipe'
					img={images.liquidSwipe}
					to='LiquidSwipe'
					navigation={navigation}
				/>
				<AppCard
					title='Crypto Wallet'
					description='Wallet for Crypto Coins'
					img={images.coin}
					to='CryptoWallet'
					navigation={navigation}
				/>
				<AppCard
					title='Milk Tea Shop'
					description='Shop app for Milk Tea'
					img={images.milkteashop}
					to='MilkTeaShop'
					navigation={navigation}
				/>
				<AppCard
					title='Food Recipe App'
					description='Browse various receipes'
					img={images.food}
					to='FoodRecipe'
					navigation={navigation}
				/>
				<AppCard
					title='Liquid Tab Bar'
					description='Animated tab bar navigation'
					img={images.navigation}
					to='LiquidTabBar'
					navigation={navigation}
				/>
				<AppCard
					title='Movie Streaming'
					description='Movie Streaming App'
					img={images.streaming}
					to='MovieStreaming'
					navigation={navigation}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: 40,
		paddingHorizontal: 15
	},
	title: {
		fontSize: 50
	},
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
})
