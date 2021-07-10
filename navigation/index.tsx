import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import CryptoWalletScreen from '../applets/CryptoWallet'
import FoodRecipeScreen from '../applets/FoodRecipe'
import HelloWorldScreen from '../applets/HelloWorld'
import LiquidSwipeScreen from '../applets/LiquidSwipe'
import MilkTeaShopScreen from '../applets/MilkTeaShop'
import HomeScreen from '../screens/HomeScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />

				{/* Applets */}
				<Stack.Screen
					name='HelloWorld'
					component={HelloWorldScreen}
					options={{ title: 'Hello World' }}
				/>
				<Stack.Screen
					name='LiquidSwipe'
					component={LiquidSwipeScreen}
					options={{ title: 'Liqud Swipe' }}
				/>
				<Stack.Screen
					name='CryptoWallet'
					component={CryptoWalletScreen}
					options={{ title: 'Crypto Wallet' }}
				/>
				<Stack.Screen
					name='MilkTeaShop'
					component={MilkTeaShopScreen}
					options={{ title: 'Milk Tea Shop' }}
				/>
				<Stack.Screen
					name='FoodRecipe'
					component={FoodRecipeScreen}
					options={{ title: 'FoodRecipe' }}
				/>

				<Stack.Screen
					name='NotFound'
					component={NotFoundScreen}
					options={{ title: 'Oops!' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
