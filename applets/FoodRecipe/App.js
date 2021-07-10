import React from 'react'
import { Login, Recipe } from './screens'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../../navigation/foodRecipe/tabs'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={'Login'}
			>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Home' component={Tabs} />
				<Stack.Screen name='Recipe' component={Recipe} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
