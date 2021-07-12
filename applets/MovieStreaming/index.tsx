import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import App from './App'

// https://www.youtube.com/watch?v=FbGrkTzx3r8
export default function MovieStreamingScreen() {
	return (
		<>
			<App />
			<StatusBar style='light' />
		</>
	)
}
