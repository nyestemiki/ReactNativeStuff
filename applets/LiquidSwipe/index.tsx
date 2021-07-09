import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../../components/Themed'
import LiquidSwipe from './LiquidSwipe'

export default function LiquidSwipeScreen() {
	return (
		<View style={styles.container}>
			<LiquidSwipe />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
})
