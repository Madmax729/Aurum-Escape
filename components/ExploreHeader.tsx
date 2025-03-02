import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';

const categories = [
    {
      name: 'Tiny homes',
      icon: 'home',
    },
    {
      name: 'Cabins',
      icon: 'house-siding',
    },
    {
      name: 'Trending',
      icon: 'local-fire-department',
    },
    {
      name: 'Play',
      icon: 'videogame-asset',
    },
    {
      name: 'City',
      icon: 'apartment',
    },
    {
      name: 'Beachfront',
      icon: 'beach-access',
    },
    {
      name: 'Countryside',
      icon: 'nature-people',
    },
  ];
  
  interface Props {
    onCategoryChanged: (category: string) => void;
  }

const ExploreHeader = () => {
  return (
    <SafeAreaView style = {{ flex: 1 , backgroundColor: 'white'}}>
    <View style={styles.container}>
      <View style = {styles.actionRow} >
        <Link href = "/(modals)/booking"> Booking </Link>

        <TouchableOpacity>
   <Text> Filter </Text>
          </TouchableOpacity>




      </View>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    height: 130,
  },
  actionRow:{
    flexDirection: 'row',  
},
filterBtn: {
    
}

})


export default ExploreHeader