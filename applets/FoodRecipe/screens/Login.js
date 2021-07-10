import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { images, SIZES, COLORS, FONTS } from '../../../constants/foodRecipe'
import { LinearGradient } from 'expo-linear-gradient'
import { CustomButton } from '../components'

const Login = ({ navigation }) => {
	const renderHeader = () => {
		return (
			<View style={{ height: SIZES.height > 700 ? '65%' : '60%' }}>
				<ImageBackground
					source={images.loginBackground}
					style={{ flex: 1, justifyContent: 'flex-end' }}
					resizeMode='cover'
				>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
						colors={[COLORS.transparent, COLORS.black]}
						style={{
							height: 200,
							justifyContent: 'flex-end',
							paddingHorizontal: SIZES.padding
						}}
					>
						<Text
							style={{
								width: '80%',
								color: COLORS.white,
								...FONTS.largeTitle,
								lineHeight: 45,
								fontWeight: 'bold'
							}}
						>
							Cooking a Delicious Food Easily
						</Text>
					</LinearGradient>
				</ImageBackground>
			</View>
		)
	}

	const renderDetail = () => {
		return (
			<View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
				<Text
					style={{
						marginTop: SIZES.radius,
						width: '70%',
						color: COLORS.gray,
						...FONTS.body3
					}}
				>
					Discover more than 1200 food recipes in your hands and cooking it easily!
				</Text>

				<View style={{ flex: 1, justifyContent: 'center' }}>
					<CustomButton
						buttonText='Login'
						colors={[COLORS.darkGreen, COLORS.lime]}
						onPress={() => navigation.replace('Home')}
						buttonContainerStyle={{ paddingVertical: 18, borderRadius: 20 }}
					/>
					<CustomButton
						buttonText='Sign Up'
						onPress={() => navigation.replace('Home')}
						buttonContainerStyle={{
							marginTop: SIZES.radius,
							paddingVertical: 18,
							borderRadius: 20,
							borderColor: COLORS.darkLime,
							borderWidth: 1
						}}
					/>
				</View>
			</View>
		)
	}

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.black }}>
			<StatusBar barStyle='light-content' />
			{renderHeader()}
			{renderDetail()}
		</View>
	)
}

export default Login
