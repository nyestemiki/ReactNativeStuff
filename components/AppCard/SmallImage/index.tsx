import React from 'react'
import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native'

export default ({ src }: { src: ImageSourcePropType }) => (
	<View style={styles.imgContainer}>
		<Image source={src} resizeMode='contain' style={styles.img} />
	</View>
)

const styles = StyleSheet.create({
	imgContainer: {
		overflow: 'hidden',
		width: 25,
		height: 25,
		borderRadius: 15,
		marginHorizontal: 4
	},
	img: {
		width: 25,
		height: 25
	}
})
