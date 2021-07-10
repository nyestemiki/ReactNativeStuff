import React from 'react'
import { Text, Image, View } from 'react-native'
import { COLORS, FONTS } from '../../../constants/foodRecipe'

const Viewers = ({ viewersList = [] }) => {
	return viewersList.length === 0 ? (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
				Be the first one to try this
			</Text>
		</View>
	) : viewersList.length < 5 ? (
		<View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
					marginBottom: 10
				}}
			>
				{viewersList.map((item, index) => (
					<View
						key={`${index}`}
						style={{ height: 50, width: 50, marginLeft: index === 0 ? 0 : -20 }}
					>
						<Image
							source={item.profilePic}
							style={{ width: 50, height: 50, borderRadius: 25 }}
						/>
					</View>
				))}
			</View>
			<Text
				style={{
					color: COLORS.lightGray2,
					textAlign: 'right',
					...FONTS.body4,
					lineHeight: 18
				}}
			>
				{viewersList.length} people
			</Text>
			<Text
				style={{
					color: COLORS.lightGray2,
					textAlign: 'right',
					...FONTS.body4,
					lineHeight: 18
				}}
			>
				Already tried this!
			</Text>
		</View>
	) : (
		<View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
					marginBottom: 10
				}}
			>
				{viewersList.map((item, index) => {
					if (index < 3) {
						return (
							<View
								key={index}
								style={{ height: 50, width: 50, marginLeft: index === 0 ? 0 : -20 }}
							>
								<Image
									source={item.profilePic}
									style={{ height: 50, width: 50, borderRadius: 25 }}
								/>
							</View>
						)
					}

					if (index === 3) {
						return (
							<View
								style={{
									height: 50,
									width: 50,
									alignItems: 'center',
									justifyContent: 'center',
									marginLeft: -20,
									borderRadius: 25,
									backgroundColor: COLORS.darkGreen
								}}
								key={index}
							>
								<Text style={{ color: COLORS.white, ...FONTS.body4 }}>
									{viewersList.length - 3}+
								</Text>
							</View>
						)
					}
				})}
			</View>
			<Text
				style={{
					color: COLORS.lightGray2,
					textAlign: 'right',
					...FONTS.body4,
					lineHeight: 18
				}}
			>
				{viewersList.length} people
			</Text>
			<Text
				style={{
					color: COLORS.lightGray2,
					textAlign: 'right',
					...FONTS.body4,
					lineHeight: 18
				}}
			>
				Already tried this!
			</Text>
		</View>
	)
}

export default Viewers
