import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Fonts from '../../constants/Fonts'
const IngredientsItem = ({ ingredient }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 5 }}>
            <Ionicons name='ios-checkmark' color='#e67e22' size={20} />
            <Text style={{ fontFamily: Fonts.getFont(Fonts.poppins), color: 'white', lineHeight: 25, marginLeft: 6 }}>{ingredient}</Text>
        </View>
    )
}

export default IngredientsItem

const styles = StyleSheet.create({})
