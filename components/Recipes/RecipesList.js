import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import Fonts from '../../constants/Fonts';
import RecipeItem from './RecipeItem';
const RecipesList = React.memo((props) => {
    if (props.loading) {
        return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.5 }}>
            <ActivityIndicator size='large' color='white' style={{ transform: [{ scale: 1.5 }] }} />
        </View>
    }
    if (props.recipes.length === 0) return <View style={styles.noRecipes}>
        <Text style={{ fontSize: 30, color: 'white', fontFamily: Fonts.getFont(Fonts.poppins), textAlign: 'center', paddingHorizontal: 15 }}>{props.error ? props.error : 'Start By Searching for A Recipe'}</Text>
    </View>

    return <View style={{ flex: 1, paddingHorizontal: 10, marginBottom: 20 }}>
        {/* Header */}
        <Text numberOfLines={1} style={{ fontFamily: Fonts.getFont(Fonts.poppins), color: 'white', fontSize: 18 }}>{props.recipes.length} search results found for <Text style={{ fontFamily: Fonts.getFont(Fonts.poppinsSemiBold), }}>'{props.query}'</Text></Text>

        {/* List */}
        <FlatList
            keyExtractor={(item) => item.recipe_id}
            data={props.recipes}
            renderItem={({ item }) => <RecipeItem recipe={item} />}
        />

    </View>
})

export default RecipesList

const styles = StyleSheet.create({
    noRecipes: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
    }
})
