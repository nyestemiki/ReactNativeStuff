import React from 'react'
import { View, Image, Text } from 'react-native'
import { COLORS, SIZES, icons, FONTS, images } from '../../../constants/fitness'

const ProfileScreen = () => (
	<View
		style={{
			paddingTop: SIZES.padding / 2,
			backgroundColor: COLORS.white,
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<Text style={{ ...FONTS.h1, fontWeight: 'bold', color: COLORS.primary }}>Welcome</Text>
		<Image
			source={images.image1}
			style={{ width: SIZES.width * 0.8, height: SIZES.width * 0.8 }}
			resizeMode='contain'
		/>
	</View>
)

export default ProfileScreen
