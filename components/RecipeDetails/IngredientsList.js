import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Fonts from '../../constants/Fonts'
import IngredientItem from './IngredientItem';
import uuid from 'react-native-uuid'
const IngredientsList = ({ ingredients }) => {
    return (
        <>
            <Text style={{ fontFamily: Fonts.getFont(Fonts.poppinsSemiBold), marginTop: 30, fontSize: 17, color: 'white' }}>Ingredients</Text>
            {ingredients.map(ingredient => {
                return <IngredientItem key={uuid.v4()} ingredient={ingredient} />
            })}
        </>
    )
}

export default IngredientsList

const styles = StyleSheet.create({})
