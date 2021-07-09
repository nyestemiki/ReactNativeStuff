import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Switch } from 'react-native'
import MainLayout from './MainLayout'
import { FONTS, COLORS, SIZES, dummyData, icons } from '../../../constants/cryptoWallet'
import { HeaderBar } from '../components'

const SectionTitle = ({ title }) => {
	return (
		<View style={{ marginTop: SIZES.padding }}>
			<Text style={{ color: COLORS.lightGray3, ...FONTS.h4 }}>{title}</Text>
		</View>
	)
}

const Setting = ({ title, value, type, onPress }) => {
	return type === 'button' ? (
		<TouchableOpacity
			style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}
			onPress={onPress}
		>
			<Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ color: COLORS.lightGray3, marginRight: SIZES.radius, ...FONTS.h3 }}>
					{value}
				</Text>
				<Image
					source={icons.rightArrow}
					style={{ height: 15, width: 15, tintColor: COLORS.white }}
				/>
			</View>
		</TouchableOpacity>
	) : (
		<View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
			<Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
			<Switch value={value} onValueChange={value => onPress(value)} />
		</View>
	)
}

export default () => {
	const [faceId, setFaceId] = useState(true)

	return (
		<MainLayout>
			<View
				style={{ flex: 1, paddingHorizontal: SIZES.padding, backgroundColor: COLORS.black }}
			>
				<HeaderBar title='Profile' />

				<ScrollView>
					<View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
						<View style={{ flex: 1 }}>
							<Text style={{ color: COLORS.white, ...FONTS.h3 }}>
								{dummyData.profile.email}
							</Text>
							<Text style={{ color: COLORS.lightGray3, ...FONTS.body4 }}>
								{dummyData.profile.id}
							</Text>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image source={icons.verified} style={{ height: 25, width: 25 }} />
							<Text
								style={{
									marginLeft: SIZES.base,
									color: COLORS.lightGreen,
									...FONTS.body4
								}}
							>
								Verified
							</Text>
						</View>
					</View>

					<SectionTitle title='APP' />
					<Setting title='Launch Screen' value='Home' type='button' onPress={() => {}} />
					<Setting title='Appearance' value='Dark' type='button' onPress={() => {}} />

					<SectionTitle title='ACCOUNT' />
					<Setting
						title='Payment Currency'
						value='USD'
						type='button'
						onPress={() => {}}
					/>
					<Setting title='Language' value='English' type='button' onPress={() => {}} />

					<SectionTitle title='SECURITY' />
					<Setting
						title='FaceID'
						value={faceId}
						type='switch'
						onPress={value => {
							setFaceId(value)
						}}
					/>
					<Setting title='Password Settings' value='' type='button' onPress={() => {}} />
					<Setting title='Change Password' value='' type='button' onPress={() => {}} />
					<Setting
						title='2-Factor Authentication'
						value=''
						type='button'
						onPress={() => {}}
					/>
				</ScrollView>
			</View>
		</MainLayout>
	)
}
