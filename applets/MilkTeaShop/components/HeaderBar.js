import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { SIZES, FONTS, COLORS, icons } from '../../../constants/milkTeaShop'
import { connect } from 'react-redux'
import { toggleTheme } from '../../../store/milkTeaShop/themeActions'

const HeaderBar = ({ username = 'Miki', appTheme, toggleTheme }) => {
	return (
		<SafeAreaView
			style={{
				height: 150,
				width: '100%',
				backgroundColor: COLORS.purple,
				flexDirection: 'row',
				paddingTop: SIZES.padding * 2
			}}
		>
			<View style={{ flex: 1, paddingLeft: SIZES.padding }}>
				<Text style={{ color: COLORS.white, ...FONTS.h2 }}>{username},</Text>
				<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome Back!</Text>
			</View>
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
					marginHorizontal: SIZES.padding,
					height: 40,
					borderRadius: 20,
					backgroundColor: COLORS.lightPurple
				}}
				onPress={() => {
					toggleTheme(appTheme.name === 'dark' ? 'light' : 'dark')
				}}
			>
				<View
					style={{
						width: 40,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
						...(appTheme.name === 'light' && styles.selectedLightModeStyle)
					}}
				>
					<Image
						source={icons.sunny}
						style={{ width: 30, height: 30, tintColor: COLORS.white }}
					/>
				</View>
				<View
					style={{
						width: 40,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
						...(appTheme.name === 'dark' && styles.selectedNightModeStyle)
					}}
				>
					<Image
						source={icons.night}
						style={{ width: 30, height: 30, tintColor: COLORS.white }}
					/>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	selectedNightModeStyle: {
		borderRadius: 20,
		backgroundColor: COLORS.black
	},
	selectedLightModeStyle: {
		borderRadius: 20,
		backgroundColor: COLORS.yellow
	}
})

function mapStateToProps(state) {
	return {
		appTheme: state.appTheme,
		error: state.error
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleTheme: themeType => {
			return dispatch(toggleTheme(themeType))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
