import React, { useCallback } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function AppCard({ title, description, img = null, navigation, to = 'home' }) {
	const onPress = useCallback(() => {
		navigation.navigate(to)
	}, [navigation, to])

	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Image source={img ?? require('../assets/images/icon.png')} style={styles.image} />
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		padding: 20,
		marginVertical: 10,
		borderWidth: 1,
		borderRadius: 6,
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 50,
		height: 50,
		marginEnd: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	description: {
		fontSize: 15,
		opacity: 0.5
	}
})
