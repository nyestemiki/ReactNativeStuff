import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../../../constants/milkTeaShop'

const IconButton = ({ containerStyle, iconStyle, icon, onPress, disabled }) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				opacity: disabled ? 0.5 : 1,
				...containerStyle
			}}
			onPress={onPress}
			disabled={disabled}
		>
			<Image
				source={icon}
				resizeMode='contain'
				style={{ width: 25, height: 25, tintColor: COLORS.white, ...iconStyle }}
			/>
		</TouchableOpacity>
	)
}

export default IconButton
