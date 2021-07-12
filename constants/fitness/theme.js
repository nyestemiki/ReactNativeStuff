import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
	primary: '#FDA0DD',
	white: '#fff',
	black: '#000000',
	gray: '#767676',
	gray1: '#363636',
	lightGray: '#dedede',
	lightGray1: '#efefef',
	blue: '#4096FE',
	purple: '#888D8C'
}

export const SIZES = {
	base: 8,
	font: 14,
	radius: 20,
	padding: 24,

	// Typography
	largeTitle: 40,
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height
}
export const FONTS = {
	largeTitle: {
		// fontFamily: 'Roboto-Black',
		fontSize: SIZES.largeTitle
	},
	h1: {
		// fontFamily: 'Roboto-Black',
		fontSize: SIZES.h1,
		lineHeight: 36
	},
	h2: {
		// fontFamily: 'Roboto-Bold',
		fontSize: SIZES.h2,
		lineHeight: 30
	},
	h3: {
		// fontFamily: 'Roboto-Bold',
		fontSize: SIZES.h3,
		lineHeight: 22
	},
	h4: {
		// fontFamily: 'Roboto-Bold',
		fontSize: SIZES.h4,
		lineHeight: 22
	},
	body1: {
		// fontFamily: 'Roboto-Regular',
		fontSize: SIZES.body1,
		lineHeight: 36
	},
	body2: {
		// fontFamily: 'Roboto-Regular',
		fontSize: SIZES.body2,
		lineHeight: 30
	},
	body3: {
		// fontFamily: 'Roboto-Regular',
		fontSize: SIZES.body3,
		lineHeight: 22
	},
	body4: {
		// fontFamily: 'Roboto-Regular',
		fontSize: SIZES.body4,
		lineHeight: 22
	},
	body5: {
		// fontFamily: 'Roboto-Regular',
		fontSize: SIZES.body5,
		lineHeight: 22
	}
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme
