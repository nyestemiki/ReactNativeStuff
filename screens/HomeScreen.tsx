import * as React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, View, Text } from 'react-native'
import AppCard from '../components/AppCard'
import { RootStackParamList } from '../types'

export default function HomedScreen({ navigation }: StackScreenProps<RootStackParamList, 'Home'>) {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Applets</Text>
			<View style={styles.container}>
				<AppCard
					title='Hello World'
					description='Starter Application'
					img={require('../assets/images/applets/hello.png')}
					to='HelloWorld'
					navigation={navigation}
				/>
				<AppCard
					title='Liquid Swipe'
					description='Liquid Swipe'
					img={require('../assets/images/applets/liquid_swipe.png')}
					to='LiquidSwipe'
					navigation={navigation}
				/>
				<AppCard
					title='Crypto Wallet'
					description='Wallet for Crypto Coins'
					img={require('../assets/images/applets/coin.png')}
					to='CryptoWallet'
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
