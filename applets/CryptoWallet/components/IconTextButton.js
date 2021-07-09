import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants/cryptoWallet'

export default ({ label, icon, containerStyle, onPress }) => (
	<TouchableOpacity
		style={{
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			height: 50,
			borderRadius: SIZES.radius,
			backgroundColor: COLORS.white,
			...containerStyle
		}}
		onPress={onPress}
	>
		<Image source={icon} resizeMode='contain' style={{ width: 20, height: 20 }} />
		<Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>{label}</Text>
	</TouchableOpacity>
)
