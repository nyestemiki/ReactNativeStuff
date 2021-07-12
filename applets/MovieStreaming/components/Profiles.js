import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants/movieStreaming'

const NR_PROFILES_SHOWN = 3

const Profiles = ({ profiles }) => {
	return (
		<View style={styles.container}>
			{profiles.slice(0, NR_PROFILES_SHOWN).map((item, index) => (
				<View key={`profile-${index}`} style={index !== 0 && { marginLeft: -15 }}>
					<Image source={item.profile} resizeMode='cover' style={styles.profileImage} />
				</View>
			))}
			{profiles.length > NR_PROFILES_SHOWN && (
				<Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>
					+{profiles.length - NR_PROFILES_SHOWN}
				</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: COLORS.black
	}
})

export default Profiles
