import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { SIZES, COLORS, FONTS } from '../../../constants/fitness'

interface IHeaderProps {
	leftIcon: any
	onLeftIconPressed: () => void
	title: String
	rightIcon: any
	onRightIconPressed: () => void
}

const Header = ({
	leftIcon,
	onLeftIconPressed,
	title,
	rightIcon,
	onRightIconPressed
}: IHeaderProps) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				padding: SIZES.padding
			}}
		>
			<TouchableOpacity onPress={onLeftIconPressed}>
				<Image
					source={leftIcon}
					resizeMode='contain'
					style={{ width: 30, height: 30, tintColor: COLORS.black }}
				/>
			</TouchableOpacity>
			<Text
				style={{
					...FONTS.h3,
					fontSize: 18,
					fontWeight: 'bold',
					flex: 1,
					textAlign: 'center'
				}}
			>
				{title}
			</Text>
			<TouchableOpacity onPress={onRightIconPressed}>
				<Image
					source={rightIcon}
					resizeMode='contain'
					style={{ width: 50, height: 50, tintColor: COLORS.black }}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default Header
