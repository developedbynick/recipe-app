import React, { useState, useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from '../screen/Recipes';
import RecipeDetail from '../screen/RecipeDetail';
import Favorites from '../screen/Favorites';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Fonts from '../constants/Fonts';
import { FavoritesContext } from '../context/Contexts';
const Stack = createNativeStackNavigator();
const FS = createNativeStackNavigator()
const Tabs = createBottomTabNavigator();
const getRecipeDetailsOptions = (recipe) => ({
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#222',
    },
    title: recipe.title,
    headerTitleStyle: {
        color: '#e67e22',
        fontFamily: Fonts.getFont(Fonts.poppinsBold),
    },
    headerShadowVisible: false,
    headerLargeTitleShadowVisible: false,
    headerRight: (props) => {
        const { favorites, setFavorites } = useContext(FavoritesContext);
        const [isRecipeFavorite, setIsRecipeFavorite] = useState(null);

        // UseEffect to determine if recipe is a favorite or not
        useEffect(() => {
            const favorite = favorites.find((fav) => fav.recipe_id === recipe.recipe_id)
            if (favorite) setIsRecipeFavorite(true);
            else setIsRecipeFavorite(false)
        }, [])

        /*
        ------ Steps ------
        1. If Recipe is not a favorite, it should be added to favorites, and the opposite if it is.

        */
        const handleToggleFavorites = () => {
            if (isRecipeFavorite === false) {
                setFavorites(curState => [recipe, ...curState]);
                setIsRecipeFavorite(true);
            } else {
                const clonedFavorites = [...favorites];
                const favoriteIndex = favorites.findIndex((fav) => fav.recipe_id === recipe.recipe_id);
                clonedFavorites.splice(favoriteIndex, 1);
                setFavorites(clonedFavorites)
                setIsRecipeFavorite(false)
            }
        }
        return <TouchableOpacity onPress={handleToggleFavorites} activeOpacity={0.7} style={{ marginLeft: 10 }}>
            <Ionicons name={`${isRecipeFavorite ? `ios-star` : 'ios-star-outline'}`} size={25} color='#E67E22' />
        </TouchableOpacity>
    }
})
// 1. This navigator will contain the recipes, and recipe details screens
const MainStack = function () {
    return <Stack.Navigator screenOptions={{}}>
        <Stack.Screen options={{ headerShown: false }} name='Recipes' component={Recipes} />
        <Stack.Screen name='Recipe Detail' options={(props) => {
            const { recipe } = props.route.params
            return getRecipeDetailsOptions(recipe);
        }} component={RecipeDetail} />
    </Stack.Navigator>
}

const FavoritesStack = () => {
    return <FS.Navigator >
        <FS.Screen name='Favorites Root' options={{ headerShown: false }} component={Favorites} />
        <FS.Screen options={(props) => {
            const { recipe } = props.route.params;
            return getRecipeDetailsOptions(recipe)
        }} name='Favorites Recipe Detail' component={RecipeDetail} />
    </FS.Navigator>
}

//  This Navigator contains the stack Navigator and the favorites screen
const MainTabs = function () {
    const [favorites, setFavorites] = useState([])
    return <FavoritesContext.Provider value={{ favorites, setFavorites }} >
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#222',
                minHeight: 60,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#e67e22'
        }} >
            <Tabs.Screen options={() => {
                return {
                    tabBarIcon: (props) => {
                        return <Ionicons name={props.focused ? 'ios-home' : 'ios-home-outline'} size={30} color={props.color} />
                    }
                }
            }} name='Home' component={MainStack} />
            <Tabs.Screen options={(props) => {
                return {
                    tabBarIcon: (props) => {
                        return <Ionicons name={props.focused ? 'ios-star' : 'ios-star-outline'} size={30} color={props.color} />
                    }
                }
            }} name='Favorites' component={FavoritesStack} />
        </Tabs.Navigator>
    </FavoritesContext.Provider>
}

export default MainTabs
