import React from 'react'
import { Location, Order, OrderDetail } from './screens'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../../navigation/milkTeaShop/tabs'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={'Home'}
			>
				<Stack.Screen name='Home' component={Tabs} />
				<Stack.Screen name='Location' component={Location} />
				<Stack.Screen name='Order' component={Order} />
				<Stack.Screen name='OrderDetail' component={OrderDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
