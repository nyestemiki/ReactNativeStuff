import React from 'react'
import { TouchableOpacity, View, Text, Image, TextInput } from 'react-native'
import { SIZES, COLORS, FONTS, icons } from '../../../constants/fitness'

const Search = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: SIZES.base * 2,
				paddingVertical: SIZES.base,
				backgroundColor: COLORS.lightGray1,
				borderRadius: 1000,
				marginHorizontal: SIZES.padding
			}}
		>
			<Image
				source={icons.search}
				resizeMode='contain'
				style={{ width: 25, height: 25, tintColor: COLORS.gray, marginRight: 10 }}
			/>
			<TextInput
				placeholder='Search'
				placeholderTextColor={COLORS.gray}
				style={{ flex: 1 }}
			/>
			<TouchableOpacity onPress={() => {}}>
				<Image
					source={icons.filter}
					resizeMode='contain'
					style={{ width: 25, height: 25, tintColor: COLORS.gray1 }}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default Search
