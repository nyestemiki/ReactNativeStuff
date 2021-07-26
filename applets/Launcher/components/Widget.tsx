import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

export type WidgetType = {
	id: Number
	title: string
	icon?: any
	buttonLeftText: string
	buttonLeftAction: () => void
	buttonRightText: string
	buttonRightAction: () => void
	content: any
}

export default ({
	data: {
		title,
		icon,
		buttonLeftText,
		buttonLeftAction,
		buttonRightText,
		buttonRightAction,
		content
	}
}: {
	data: WidgetType
}) => (
	<View style={styles.container}>
		<View style={styles.titleBar}>
			{icon && (
				<View>
					<Image source={icon} style={styles.img} />
				</View>
			)}
			<Text style={styles.title}>{title}</Text>
		</View>
		<View style={styles.top}>{content}</View>
		<View style={styles.buttons}>
			<TouchableOpacity style={styles.button} onPress={buttonLeftAction}>
				<Text style={styles.buttonText}>{buttonLeftText}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={buttonRightAction}>
				<Text style={styles.buttonText}>{buttonRightText}</Text>
			</TouchableOpacity>
		</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		padding: SIZES.padding,
		backgroundColor: COLORS.widgetBackground,
		borderRadius: SIZES.radius
	},
	titleBar: {
		marginBottom: 14,
		flexDirection: 'row',
		alignItems: 'center'
	},
	img: {
		width: SIZES.icon,
		height: SIZES.icon,
		marginRight: 6
	},
	title: {
		...FONTS.h2
	},
	top: {
		flex: 1
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		backgroundColor: COLORS.buttonBackground,
		borderRadius: SIZES.radius,
		paddingHorizontal: SIZES.padding,
		paddingVertical: SIZES.paddingSmall,
		width: '48%'
	},
	buttonText: {
		textAlign: 'center',
		...FONTS.button
	}
})
