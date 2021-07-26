import React, { useEffect, useState } from 'react'
import {
	StatusBar,
	Text,
	View,
	StyleSheet,
	Image,
	Dimensions,
	Animated,
	Platform
} from 'react-native'
import { getMovies } from './api'
import Genres from './Genres'
import Rating from './Rating'
import { Loading } from './Loading'
import { Backdrop } from './Backdrop'

export const { width, height } = Dimensions.get('window')
export const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74
const SPACING = 10
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2

// Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
export default function App() {
	const [movies, setMovies] = useState<any>([])
	const scrollX = React.useRef(new Animated.Value(0)).current

	const fetchData = async () => {
		const movies = await getMovies()
		setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }])
	}

	useEffect(() => {
		fetchData()
	}, [])

	return movies.length === 0 ? (
		<Loading />
	) : (
		<View
			style={{
				flex: 1
			}}
		>
			{/* <Backdrop movies={movies} scrollX={scrollX} /> */}
			<StatusBar translucent animated barStyle='dark-content' />
			<Animated.FlatList
				showsHorizontalScrollIndicator={false}
				data={movies}
				keyExtractor={item => item.key}
				horizontal
				bounces={false}
				decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
				renderToHardwareTextureAndroid
				contentContainerStyle={{
					alignItems: 'center'
				}}
				snapToInterval={ITEM_SIZE}
				snapToAlignment='start'
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false }
				)}
				scrollEventThrottle={16}
				renderItem={({ item, index }) => {
					if (!item.poster) {
						return <View style={{ width: EMPTY_ITEM_SIZE }} />
					}

					const translateY = scrollX.interpolate({
						inputRange: [
							(index - 2) * ITEM_SIZE,
							(index - 1) * ITEM_SIZE,
							index * ITEM_SIZE
						],
						outputRange: [100, 50, 100],
						extrapolate: 'clamp'
					})

					return (
						<View
							style={{
								width: ITEM_SIZE,
								borderColor: 'red',
								borderWidth: 1
							}}
						>
							<Animated.View
								style={{
									marginHorizontal: SPACING * 2,
									alignItems: 'center',
									transform: [{ translateY }],
									backgroundColor: 'white',
									borderRadius: 34
								}}
							>
								<Image
									source={{ uri: item.poster }}
									style={styles.posterImage}
								/>
								<Text
									style={{
										fontSize: 20,
										textAlign: 'center'
									}}
								>
									{item.title}
								</Text>
							</Animated.View>
						</View>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	posterImage: {
		width: '100%',
		height: ITEM_SIZE * 1.2,
		resizeMode: 'cover',
		borderRadius: 24,
		margin: 0,
		marginBottom: 20
	}
})
