import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { MovieDetail } from './screens'
import Tabs from '../../navigation/movieStreaming/tabs'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer independent>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={'Home'}
			>
				<Stack.Screen name='Home' component={Tabs} />
				<Stack.Screen name='MovieDetail' component={MovieDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
