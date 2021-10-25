import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const Header = (props) => {
    const handleSearchForNewRecipes = () => {
        if (!props.inputValue.length > 0) return;
        props.handleSearch()
        Keyboard.dismiss()
    }
    return <SafeAreaView style={styles.header}>
        <TextInput style={styles.input} value={props.inputValue} onChangeText={(text) => props.setInputValue(text)} placeholder='Search for a recipe' />
        <TouchableOpacity onPress={handleSearchForNewRecipes} activeOpacity={0.7} >
            <Ionicons name='ios-search-outline' color='#e67e22' size={30} />
        </TouchableOpacity>
    </SafeAreaView>
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: '28%',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 350,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        minHeight: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10
    },
})
