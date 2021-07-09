import React from 'react'
import { View, Text, Image } from 'react-native'
import { FONTS, COLORS } from '../../../constants/cryptoWallet'

export default ({ focused, icon, iconStyle, label, isTrade }) =>
	isTrade ? (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				width: 80,
				height: 80,
				borderRadius: 40,
				backgroundColor: 'black',
				borderWidth: 3,
				borderColor: COLORS.lightGreen
			}}
		>
			<Image
				source={icon}
				resizeMode='contain'
				style={{ width: 35, height: 25, tintColor: COLORS.white, ...iconStyle }}
			/>
			<Text style={{ color: COLORS.white, ...FONTS.h4 }}>Trade</Text>
		</View>
	) : (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<Image
				source={icon}
				resizeMode='contain'
				style={{
					width: 25,
					height: 25,
					tintColor: focused ? COLORS.white : COLORS.secondary,
					...iconStyle
				}}
			/>
			<Text style={{ color: focused ? COLORS.white : COLORS.secondary, ...FONTS.h4 }}>
				{label}
			</Text>
		</View>
	)
