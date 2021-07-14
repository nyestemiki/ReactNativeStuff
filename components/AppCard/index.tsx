import React from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	ImageSourcePropType
} from 'react-native'
import images from '../../constants/images'
import getCreatorImage from '../../utils/getCreatorImage'
import SmallImage from './SmallImage'
import { BY } from './types'

interface Props {
	title: String
	description: String
	img: ImageSourcePropType | null
	onPress: () => void
	by: BY
	wip?: boolean
}

export default ({
	title,
	description,
	img = null,
	onPress,
	by = BY.OTHER,
	wip = false
}: Props) => (
	<TouchableOpacity style={styles.card} onPress={onPress}>
		<Image source={img ?? images.icon} style={styles.thumbnail} />
		<View>
			<View style={styles.firstRow}>
				<Text style={styles.title}>{title}</Text>
				<SmallImage src={getCreatorImage(by)} />
				{wip && <SmallImage src={images.wip} />}
			</View>
			<Text style={styles.description}>{description}</Text>
		</View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	card: {
		padding: 20,
		marginVertical: 10,
		borderRadius: 6,
		backgroundColor: '#4444',
		flexDirection: 'row',
		alignItems: 'center'
	},
	thumbnail: {
		width: 65,
		height: 65,
		marginEnd: 30
	},
	firstRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 6
	},
	title: {
		marginEnd: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#efefef'
	},
	description: {
		fontSize: 15,
		opacity: 0.5,
		color: '#efefef'
	}
})
