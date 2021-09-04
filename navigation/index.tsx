import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
	RouteConfig,
	StackNavigationState
} from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { StackNavigationEventMap } from '@react-navigation/stack/lib/typescript/src/types'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import CryptoWalletScreen from '../applets/CryptoWallet'
import DonutChartScreen from '../applets/DonutChart'
import FitnessScreen from '../applets/Fitness'
import FoodRecipeScreen from '../applets/FoodRecipe'
import HelloWorldScreen from '../applets/HelloWorld'
import LauncherScreen from '../applets/Launcher'
import LiquidSwipeScreen from '../applets/LiquidSwipe'
import LiquidTabBarScreen from '../applets/LiquidTabBar'
import MilkTeaShopScreen from '../applets/MilkTeaShop'
import MoviesScreen from '../applets/Movies'
import MovieStreamingScreen from '../applets/MovieStreaming'
import UberScreen from '../applets/Uber'
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
				<Stack.Screen name={'Home'} component={HomeScreen} options={{ title: 'Home' }} />

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
					name='LiquidTabBar'
					component={LiquidTabBarScreen}
					options={{ title: 'Liquid Tab Bar' }}
				/>
				<Stack.Screen
					name='MovieStreaming'
					component={MovieStreamingScreen}
					options={{ title: 'Movie Streaming App' }}
				/>
				<Stack.Screen
					name='Fitness'
					component={FitnessScreen}
					options={{ title: 'Fitness App' }}
				/>
				<Stack.Screen
					name='Movies'
					component={MoviesScreen}
					options={{ title: 'Movies' }}
				/>
				<Stack.Screen
					name='Launcher'
					component={LauncherScreen}
					options={{ title: 'Launcher' }}
				/>
				<Stack.Screen
					name='DonutChart'
					component={DonutChartScreen}
					options={{ title: 'Donut Chart' }}
				/>
				<Stack.Screen
					name='Uber'
					component={UberScreen}
					options={{ title: 'Uber Clone' }}
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
