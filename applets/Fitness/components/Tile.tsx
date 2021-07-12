import React from 'react'
import { TouchableOpacity, View, Text, Image, TextInput } from 'react-native'
import { SIZES, COLORS, FONTS, icons } from '../../../constants/fitness'

const Tile = ({
	title,
	content,
	progress,
	containerStyle,
	backgroundColor,
	progressColor
}: {
	title: String
	content: String
	progress: Number
	containerStyle?: any
	backgroundColor: String
	progressColor: any
}) => {
	return (
		<View
			style={{
				width: SIZES.width * 0.42,
				backgroundColor,
				height: 175,
				borderRadius: SIZES.radius,
				...containerStyle,
				padding: SIZES.padding,
				alignItems: 'center',
				justifyContent: 'space-around'
			}}
		>
			<Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>

			<View style={{ width: '100%' }}>
				<Text
					style={{
						...FONTS.h1,
						color: COLORS.white,
						fontWeight: 'bold',
						textAlign: 'center'
					}}
				>
					{content}
				</Text>
				<View style={{ marginTop: SIZES.padding }}>
					<View
						style={{
							width: '100%',
							backgroundColor: COLORS.white,
							height: 10,
							borderRadius: 1000,
							left: 0,
							position: 'absolute',
							bottom: 0
						}}
					/>
					<View
						style={{
							width: progress + '%',
							backgroundColor: progressColor,
							height: 10,
							borderRadius: 1000,
							left: 0,
							position: 'absolute',
							bottom: 0
						}}
					/>
				</View>
			</View>
		</View>
	)
}

export default Tile
