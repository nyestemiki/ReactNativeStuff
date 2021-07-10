import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONTS } from '../../../constants/foodRecipe'

const CustomButton = ({ buttonText, buttonContainerStyle, colors = [], onPress }) => {
	return colors.length > 0 ? (
		<TouchableOpacity onPress={onPress}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={colors}
				style={{ ...buttonContainerStyle }}
			>
				<Text style={{ textAlign: 'center', color: COLORS.white, ...FONTS.h3 }}>
					{buttonText}
				</Text>
			</LinearGradient>
		</TouchableOpacity>
	) : (
		<TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
			<Text style={{ textAlign: 'center', color: COLORS.lightGreen, ...FONTS.h3 }}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	)
}

export default CustomButton
