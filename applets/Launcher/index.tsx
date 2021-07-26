import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import icons from '../../constants/launcher/icons'
import { Widget } from './components'
import { WidgetType } from './components/Widget'
import { COLORS, FONTS, SIZES } from './constants'

const greeting = 'Good Morning, Miki'

const widgets: WidgetType[] = [
	{
		id: 1,
		title: 'Clock',
		icon: icons.clock,
		buttonLeftText: 'Add Alarm',
		buttonLeftAction: () => {},
		buttonRightText: 'See All',
		buttonRightAction: () => {},
		content: (
			<View
				style={{
					marginVertical: SIZES.padding,
					flexDirection: 'row'
					// justifyContent: 'center'
				}}
			>
				<Text style={{ color: COLORS.text }}>Next alarm at</Text>
				<Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
					{' '}
					8:00 PM{' '}
				</Text>
			</View>
		)
	},
	{
		id: 2,
		title: 'Calendar',
		icon: icons.calendar,
		buttonLeftText: 'Create an Event',
		buttonLeftAction: () => {},
		buttonRightText: 'See all Events',
		buttonRightAction: () => {},
		content: (
			<View
				style={{
					marginTop: SIZES.paddingSmall,
					marginBottom: SIZES.padding
				}}
			>
				<Text
					style={{
						...FONTS.h4,
						marginBottom: SIZES.paddingSmall,
						fontWeight: '500',
						textTransform: 'uppercase'
					}}
				>
					Upcoming Events
				</Text>
				<View
					style={{
						marginBottom: SIZES.padding
					}}
				>
					<Text style={{ ...FONTS.h3 }}>Important Meeting</Text>
					<Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
						5:00 PM
					</Text>
				</View>
				<View>
					<Text style={{ ...FONTS.h3 }}>Project Deadline</Text>
					<Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
						Tomorrow Morning
					</Text>
				</View>
			</View>
		)
	},
	{
		id: 3,
		title: 'Maps',
		icon: icons.maps,
		buttonLeftText: 'New Destination',
		buttonLeftAction: () => {},
		buttonRightText: 'View Timeline',
		buttonRightAction: () => {},
		content: (
			<View style={{ paddingVertical: SIZES.padding }}>
				<View
					style={{
						flexDirection: 'row',
						marginBottom: SIZES.paddingSmall
					}}
				>
					<Text style={{ color: COLORS.text }}>
						Continue straight for
					</Text>
					<Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
						{' '}
						300m
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ color: COLORS.text }}>Turn</Text>
					<Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
						{' '}
						left{' '}
					</Text>
					<Text style={{ color: COLORS.text }}>
						at the roundabout
					</Text>
				</View>
				<Text
					style={{
						color: COLORS.text,
						marginTop: SIZES.padding,
						fontStyle: 'italic',
						opacity: 0.8
					}}
				>
					4 more instructions to get to your destination
				</Text>
			</View>
		)
	},
	{
		id: 4,
		title: 'Messages',
		icon: icons.message,
		buttonLeftText: 'New Message',
		buttonLeftAction: () => {},
		buttonRightText: 'See All',
		buttonRightAction: () => {},
		content: (
			<View
				style={{
					paddingVertical: SIZES.padding,
					alignItems: 'center'
				}}
			>
				<Text style={{ ...FONTS.h2 }}>No Message Found</Text>
			</View>
		)
	},
	{
		id: 5,
		title: 'Mails',
		icon: icons.mail,
		buttonLeftText: 'New Mail',
		buttonLeftAction: () => {},
		buttonRightText: 'See All',
		buttonRightAction: () => {},
		content: (
			<View
				style={{
					paddingVertical: SIZES.padding,
					alignItems: 'center'
				}}
			>
				<Text style={{ ...FONTS.h2 }}>No Mail Found</Text>
			</View>
		)
	},
	{
		id: 6,
		title: 'Messengers',
		icon: icons.messenger,
		buttonLeftText: 'New Message',
		buttonLeftAction: () => {},
		buttonRightText: 'See All',
		buttonRightAction: () => {},
		content: (
			<View
				style={{
					paddingVertical: SIZES.padding,
					alignItems: 'center'
				}}
			>
				<Text style={{ ...FONTS.h2 }}>No Message Found</Text>
			</View>
		)
	}
]

export default function LauncherScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.greeting}>{greeting}</Text>
			<FlatList
				data={widgets}
				keyExtractor={item => `${item.id}`}
				renderItem={({ item }) => <Widget data={item} />}
				style={{ paddingVertical: 10 }}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 60,
		paddingHorizontal: SIZES.padding,
		backgroundColor: COLORS.background
	},
	greeting: {
		marginBottom: 25,
		...FONTS.h1
	},
	widgets: {
		paddingTop: 30
	}
})
