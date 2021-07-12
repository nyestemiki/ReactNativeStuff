import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../../constants/fitness'

const Card = ({ workout, containerStyle }: { workout: any; containerStyle: any }) => {
	return (
		<TouchableOpacity
			style={{
				...containerStyle,
				width: SIZES.width * 0.85,
				marginRight: SIZES.padding,
				borderRadius: SIZES.radius,
				padding: SIZES.padding,
				backgroundColor: workout.color,
				overflow: 'hidden'
			}}
		>
			<View style={{ width: '65%' }}>
				<Text style={{ ...FONTS.h1, fontWeight: 'bold' }}>{workout.title}</Text>
			</View>
			<View style={{ width: '65%' }}>
				<Text style={{ ...FONTS.body4, color: COLORS.gray1, fontWeight: 'bold' }}>
					{workout.description}
				</Text>
			</View>
			<View
				style={{
					justifyContent: 'flex-start',
					alignItems: 'center',
					marginTop: SIZES.padding,
					flexDirection: 'row'
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						backgroundColor: COLORS.lightGray1,
						paddingHorizontal: SIZES.padding,
						paddingVertical: SIZES.base,
						borderRadius: SIZES.radius,
						marginRight: 10
					}}
				>
					<Image
						source={icons.triangleDown}
						style={{
							tintColor: 'black',
							transform: [{ rotate: '-90deg' }],
							width: 15,
							height: 15,
							marginRight: 6
						}}
					/>
					<Text style={{ ...FONTS.body4, fontWeight: 'bold' }}>{workout.duration}</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						backgroundColor: COLORS.lightGray1,
						paddingHorizontal: SIZES.padding,
						paddingVertical: SIZES.base,
						borderRadius: SIZES.radius
					}}
				>
					<Image
						source={icons.fire}
						style={{
							tintColor: 'red',
							width: 15,
							height: 15,
							marginRight: 6
						}}
					/>
					<Text style={{ ...FONTS.body4, fontWeight: 'bold' }}>{workout.calories}</Text>
				</View>
			</View>

			<View
				style={{
					position: 'absolute',
					right: 0,
					left: 0,
					bottom: -25,
					top: 0,
					flexDirection: 'row-reverse',
					zIndex: -1
				}}
			>
				<Image
					source={workout.image}
					resizeMode='contain'
					style={{
						height: '100%',
						width: '55%'
					}}
				/>
			</View>
		</TouchableOpacity>
	)
}

export default Card
