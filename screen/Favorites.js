import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Fonts from '../constants/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FavoritesContext } from '../context/Contexts';
import FavoritesItem from '../components/Favorites/FavoriteItem';
const Favorites = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext)
  if (favorites.length === 0) {
    return <View style={{ flex: 1, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.boldText}>It looks like you don't have any favorites.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Recipes')} style={styles.addFavoritesButton}>
        <Text style={[styles.boldText, { marginBottom: 0, fontSize: 16, fontFamily: Fonts.getFont(Fonts.poppinsSemiBold), paddingVertical: 0, lineHeight: null }]}>Add Favorites.</Text>
      </TouchableOpacity>
    </View>
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.FavoritesHeader}>Your Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.recipe_id}
        style={{ paddingHorizontal: 10, paddingTop: 20 }}
        renderItem={({ item }) => <FavoritesItem recipe={item} />}
      />
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 25
  },
  FavoritesHeader: {
    fontFamily: Fonts.getFont(Fonts.poppinsBold),
    textAlign: 'center',
    fontSize: 26,
    color: 'white',
  },
  boldText: {
    fontFamily: Fonts.getFont(Fonts.poppinsBold),
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 35,
    marginBottom: 10,
  },
  addFavoritesButton: {
    backgroundColor: '#e67e22',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5
  }
})
