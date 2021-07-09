import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { useFonts } from 'expo-font'

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	const [loaded] = useFonts({
		RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
		RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
		RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf')
	})

	if (!loaded) {
		return null
	}

	return (
		isLoadingComplete && (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar translucent animated />
			</SafeAreaProvider>
		)
	)
}
