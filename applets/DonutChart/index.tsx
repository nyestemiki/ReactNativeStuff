import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Donut from './components/Donut'

// https://www.youtube.com/watch?v=x2LtzCxbWI0
export default function DonutChartScreen({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<Donut/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: '#000'
	},
	title: {
		fontSize: 50,
		fontWeight: 'bold',
		color: '#efefef'
	}
})
