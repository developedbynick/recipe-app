import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Fonts from '../../constants/Fonts'
const { useNavigation } = require('@react-navigation/native')
const RecipeItem = ({ recipe }) => {
    const navigation = useNavigation()
    const handleOnNavigateToRecipe = () => {
        navigation.navigate('Recipe Detail', { recipe })
    }
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={handleOnNavigateToRecipe} style={styles.recipeItem}>
            {/* Image Row */}
            <View style={styles.imageRow}>
                <Image style={styles.image} source={{ uri: recipe.image_url, width: '100%', height: '100%' }} />
            </View>
            {/* Text Row */}
            <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'space-around', height: '100%', paddingVertical: 10 }}>
                <Text numberOfLines={1} style={{ fontFamily: Fonts.getFont(Fonts.poppinsSemiBold), color: 'white', fontSize: 17 }} >{recipe.title}</Text>
                <Text numberOfLines={1} style={{ fontFamily: Fonts.getFont(Fonts.poppins), color: 'white', fontSize: 15 }} >{recipe.publisher}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeItem

const styles = StyleSheet.create({
    recipeItem: {
        backgroundColor: '#111',
        height: 70,
        marginVertical: 10,
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageRow: {
        height: '100%',
        width: 55,
        // padding: 7,
    },
    image: {
        // borderRadius: 500
    }
})
