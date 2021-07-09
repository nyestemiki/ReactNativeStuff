import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../../store/cryptoWallet/rootReducer'
import Tabs from '../../navigation/cryptoWallet/tabs'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { COLORS } from '../../constants/cryptoWallet'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function CryptoWalletScreen() {
	return (
		<Provider store={store}>
			<View style={{ flex: 1, backgroundColor: COLORS.black }}>
				<Tabs />
			</View>
			<StatusBar style='light' />
		</Provider>
	)
}
