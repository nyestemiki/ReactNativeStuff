import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Portfolio, Market, Profile } from '../../applets/CryptoWallet/screens'
import { COLORS, icons, SIZES } from '../../constants/cryptoWallet'
import { TabIcon } from '../../applets/CryptoWallet/components'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setTradeModalVisibity } from '../../store/cryptoWallet/tab/tabActions'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => (
	<TouchableOpacity
		style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: -25 }}
		onPress={onPress}
	>
		{children}
	</TouchableOpacity>
)

const Tabs = ({ setTradeModalVisibity, isTradeModalVisible }) => {
	function tradeTabButtonOnClickHandler() {
		setTradeModalVisibity(!isTradeModalVisible)
	}

	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					height: 80,
					backgroundColor: COLORS.primary,
					borderTopColor: 'transparent',
					borderTopLeftRadius: SIZES.radius,
					borderTopRightRadius: SIZES.radius
				}
			}}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ focused }) =>
						!isTradeModalVisible && (
							<TabIcon focused={focused} icon={icons.home} label='Home' />
						)
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) {
							e.preventDefault()
						}
					}
				}}
			/>
			<Tab.Screen
				name='Portfolio'
				component={Portfolio}
				options={{
					tabBarIcon: ({ focused }) =>
						!isTradeModalVisible && (
							<TabIcon focused={focused} icon={icons.briefcase} label='Portfolio' />
						)
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) {
							e.preventDefault()
						}
					}
				}}
			/>
			<Tab.Screen
				name='Trade'
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={isTradeModalVisible ? icons.close : icons.trade}
							iconStyle={
								isTradeModalVisible && {
									width: 15,
									height: 15
								}
							}
							label='Trade'
							isTrade
						/>
					),
					tabBarButton: props => (
						<TabBarCustomButton {...props} onPress={tradeTabButtonOnClickHandler} />
					)
				}}
			/>
			<Tab.Screen
				name='Market'
				component={Market}
				options={{
					tabBarIcon: ({ focused }) =>
						!isTradeModalVisible && (
							<TabIcon focused={focused} icon={icons.market} label='Market' />
						)
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) {
							e.preventDefault()
						}
					}
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) =>
						!isTradeModalVisible && (
							<TabIcon focused={focused} icon={icons.profile} label='Profile' />
						)
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) {
							e.preventDefault()
						}
					}
				}}
			/>
		</Tab.Navigator>
	)
}

function mapStateToProps(state) {
	return {
		isTradeModalVisible: state.tabReducer.isTradeModalVisible
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setTradeModalVisibity: isVisible => {
			return dispatch(setTradeModalVisibity(isVisible))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
