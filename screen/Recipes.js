import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { baseUrl } from '../constants/Api';
import Header from '../components/Recipes/Header';
import RecipesList from '../components/Recipes/RecipesList';
const Recipes = () => {
    const [inputValue, setInputValue] = useState('')
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('')
    const handleSearchForNewRecipes = async () => {
        setLoading(true);
        setQuery(inputValue)
        try {
            // 1. Make Api Call
            const response = await fetch(`${baseUrl}${inputValue}`)
            // 2. Set Data
            const recipes = await response.json()
            // 3. Set The necessary state
            // 3.5 Error Message(If Recipes are not returned)
            if (recipes.error) throw new Error('The requested recipes cannot be found. Please try again.')
            setRecipes(recipes)
            setLoading(false);
        } catch (error) {
            // 4. Check for errors
            setError(error.message)
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Header {...{ inputValue, setInputValue }} handleSearch={handleSearchForNewRecipes} />
            <RecipesList query={query} loading={loading} error={error} inputValue={inputValue} recipes={recipes.recipes ?? []} />
        </View>
    )
}

export default Recipes

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        flex: 1
    },


})
