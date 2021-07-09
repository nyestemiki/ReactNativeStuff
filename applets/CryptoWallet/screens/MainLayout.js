import React, { useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'
import { COLORS, SIZES, icons } from '../../../constants/cryptoWallet'
import { IconTextButton } from '../components'
import { connect } from 'react-redux'

const MainLayout = ({ children, isTradeModalVisible }) => {
	const modalAnimatedValue = useRef(new Animated.Value(0)).current

	const modalY = modalAnimatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [SIZES.height, SIZES.height - 275]
	})

	useEffect(() => {
		Animated.timing(modalAnimatedValue, {
			toValue: isTradeModalVisible ? 1 : 0,
			duration: 500,
			useNativeDriver: false
		}).start()
	}, [isTradeModalVisible])

	return (
		<View style={{ flex: 1 }}>
			{children}

			{/* Dim */}
			{isTradeModalVisible && (
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						backgroundColor: COLORS.transparentBlack
					}}
					opacity={modalAnimatedValue}
				/>
			)}

			{/* Modal */}
			<Animated.View
				style={{
					position: 'absolute',
					left: 0,
					top: modalY,
					width: '100%',
					padding: SIZES.padding
				}}
			>
				<IconTextButton label='Transfer' icon={icons.send} onPress={() => {}} />
				<IconTextButton
					label='Withdraw'
					icon={icons.withdraw}
					containerStyle={{ marginTop: SIZES.base }}
					onPress={() => {}}
				/>
			</Animated.View>
		</View>
	)
}

function mapStateToProps(state) {
	return {
		isTradeModalVisible: state.tabReducer.isTradeModalVisible
	}
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
