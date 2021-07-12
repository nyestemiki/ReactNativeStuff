import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../../constants/fitness'
import { Header, Tile } from '../components'

const AnalyticsScreen = ({ navigation }: any) => {
	return (
		<View style={{ paddingTop: SIZES.padding / 2, backgroundColor: COLORS.white, flex: 1 }}>
			<Header
				leftIcon={icons.back}
				onLeftIconPressed={() => {
					navigation.goBack()
				}}
				title='Analytics'
				rightIcon={icons.bell}
				onRightIconPressed={() => {}}
			/>

			<ScrollView>
				<View style={{ marginBottom: 130, paddingHorizontal: SIZES.padding }}>
					{/* Header */}
					<View style={{ marginBottom: 20 }}>
						<Text style={{ color: COLORS.primary, ...FONTS.h2, fontWeight: 'bold' }}>
							Today
						</Text>
						<Text style={{ color: COLORS.black, ...FONTS.h1, fontWeight: 'bold' }}>
							{dummyData.stats.date}
						</Text>
					</View>

					{/* Buttons */}
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: COLORS.lightGray1,
								paddingHorizontal: SIZES.padding,
								paddingVertical: SIZES.padding / 2,
								borderRadius: 1000
							}}
						>
							<Text style={{ ...FONTS.h3, fontWeight: 'bold', marginRight: 6 }}>
								Calories
							</Text>
							<Image
								source={icons.triangleDown}
								resizeMode='contain'
								style={{ width: 18, height: 18, tintColor: COLORS.primary }}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: COLORS.lightGray1,
								paddingHorizontal: SIZES.padding,
								paddingVertical: SIZES.padding / 2,
								borderRadius: 1000
							}}
						>
							<Text style={{ ...FONTS.h3, fontWeight: 'bold', marginRight: 6 }}>
								Today
							</Text>
							<Image
								source={icons.triangleDown}
								resizeMode='contain'
								style={{ width: 18, height: 18, tintColor: COLORS.primary }}
							/>
						</TouchableOpacity>
					</View>

					{/* Active Calories */}
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						{/* Outer Circle */}
						<View
							style={{
								width: SIZES.width * 0.7,
								height: SIZES.width * 0.7,
								backgroundColor: COLORS.primary,
								marginVertical: SIZES.padding,
								borderRadius: SIZES.width * 0.4,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							{/* Inner Circle */}
							<View
								style={{
									width: SIZES.width * 0.62,
									height: SIZES.width * 0.62,
									backgroundColor: COLORS.white,
									marginVertical: SIZES.padding,
									borderRadius: SIZES.width * 0.3,
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								{/* Text */}
								<Text
									style={{
										...FONTS.body2,
										fontWeight: 'bold',
										color: COLORS.lightGray,
										marginBottom: SIZES.base,
										fontSize: 18
									}}
								>
									Active calories
								</Text>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'flex-end',
										justifyContent: 'flex-end'
									}}
								>
									<Text
										style={{
											...FONTS.h1,
											fontWeight: 'bold',
											color: COLORS.gray1,
											fontSize: 40,
											lineHeight: 40,
											marginRight: SIZES.base
										}}
									>
										{dummyData.stats.activeCalories}
									</Text>
									<Text style={{ ...FONTS.h1, lineHeight: 40, paddingBottom: 2 }}>
										Cal
									</Text>
								</View>
							</View>
						</View>
					</View>

					{/* Tiles */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Tile
							title='Training time'
							content={dummyData.stats.trainingTime}
							progress={40}
							backgroundColor={dummyData.stats.trainingColor}
							progressColor={dummyData.stats.trainingProgressColor}
						/>
						<Tile
							title='Steps'
							content={dummyData.stats.steps}
							progress={80}
							backgroundColor={dummyData.stats.stepsColor}
							progressColor={dummyData.stats.stepsProgressColor}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default AnalyticsScreen
