import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AnalyticsScreen, HomeScreen, ProfileScreen } from '../../applets/Fitness/screens'
import { COLORS, icons } from '../../constants/fitness'
import { Image, View } from 'react-native'

const Tab = createBottomTabNavigator()

const TabIcon = ({ focused, icon, noTint }: { focused: boolean; icon: any; noTint?: boolean }) => (
	<View
		style={{
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<Image
			source={icon}
			resizeMode='contain'
			style={[
				!noTint && { tintColor: focused ? COLORS.primary : COLORS.black },
				{ width: 40, height: 40 }
			]}
		/>
		<View
			style={{
				bottom: -10,
				width: '50%',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<View
				style={{
					width: 6,
					height: 6,
					borderRadius: 3,
					backgroundColor: focused ? COLORS.primary : 'transparent'
				}}
			/>
		</View>
	</View>
)

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					elevation: 0,
					backgroundColor: COLORS.white,
					borderTopColor: COLORS.lightGray,
					borderTopWidth: 1,
					height: 120
				}
			}}
		>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />
				}}
			/>
			<Tab.Screen
				name='Analytics'
				component={AnalyticsScreen}
				options={{
					tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.stats} />
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.user} noTint />
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default Tabs
