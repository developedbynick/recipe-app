import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Fonts from '../../constants/Fonts'
import IngredientItem from './IngredientItem'
const IngredientsList = ({ ingredients }) => {

    return (
        <>
            <Text style={{ fontFamily: Fonts.getFont(Fonts.poppinsSemiBold), marginTop: 30, fontSize: 17, color: 'white' }}>Ingredients</Text>
            {ingredients.map(ingredient => {
                return <IngredientItem key={ingredient} ingredient={ingredient} />
            })}
        </>
    )
}

export default IngredientsList

const styles = StyleSheet.create({})
