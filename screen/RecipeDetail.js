import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Api from '../constants/Api'
import Fonts from '../constants/Fonts'
import IngredientsList from '../components/RecipeDetails/IngredientsList';
import * as WebBrowser from 'expo-web-browser';
const Loading = () => {
    return <View />
}

const Error = () => {
    return <View />
}
const RecipeDetail = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])
    const recipe = route.params.recipe
    const getRecipe = async () => {
        try {
            const response = await fetch(Api.urlToGetId + recipe.recipe_id);
            if (!response.ok) throw new Error(`There was an error. Error Code: ${response.status}`)
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }
    useEffect(() => {
        getRecipe()
    }, [])
    if (error) return navigation.navigate('Recipes');
    if (loading) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
        <ActivityIndicator size='large' color='#e67e22' style={{
            transform: [
                { scale: 1.3 }
            ]
        }} />
    </View>
    const handleOpenWebBrowser = () => {
        WebBrowser.openBrowserAsync(recipe.source_url)
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#222' }}>
            <View style={{ height: 250 }}>
                <Image source={{ uri: recipe.image_url, width: '100%', height: '100%', }} resizeMode='cover' />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <IngredientsList ingredients={data.recipe.ingredients} />
            </View>
            <View style={{ alignItems: 'center', paddingVertical: 15 }}>
                <TouchableOpacity onPress={handleOpenWebBrowser} activeOpacity={0.9} style={{ backgroundColor: '#e67e22', width: '50%', maxWidth: 250, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                    <Text style={{ fontFamily: Fonts.getFont(Fonts.poppinsBold), color: 'white', fontSize: 16 }}>Read More</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RecipeDetail

const styles = StyleSheet.create({
    detailContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    recipeTitle: {
        fontFamily: Fonts.getFont(Fonts.poppinsBold),
        fontSize: 22,
        color: 'white'
    }
})
