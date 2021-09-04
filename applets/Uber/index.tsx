import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'

export default function UberScreen({ navigation }: { navigation: any }) {
	return <Provider store={store}></Provider>
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
