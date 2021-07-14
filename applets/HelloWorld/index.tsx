import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HelloWorldScreen({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello World</Text>
			<TouchableOpacity
				style={{
					borderWidth: 0.25,
					borderColor: '#fff',
					paddingVertical: 15,
					paddingHorizontal: 30,
					borderRadius: 10
				}}
				onPress={() => navigation.goBack()}
			>
				<Text style={{ color: '#fff', fontSize: 20 }}>Go Back</Text>
			</TouchableOpacity>
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
