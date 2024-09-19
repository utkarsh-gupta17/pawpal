import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import PetListByCategory from '../../components/Home/PetListByCategory';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const Home = () => {
  return (
    <View style={{
      padding:20,
      marginTop:20,
    }}>
      {/* Header */}
      <Header/>
      {/* Slider */}
      <Slider/>
      {/* Category */}
      <PetListByCategory/>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      }}>
      <AntDesign name="caretleft" size={14} color="black" />
        <Text style={{
          textAlign:'center',
          fontFamily:'poppins-medium',
          fontSize: 14,
        }}>Swipe</Text>
      </View>
      {/* List of Pets */}
      <TouchableOpacity style={styles.addNewPet}>
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
        <Text style={{
          fontFamily:'monteserrat-bold',
          fontSize:18,
          color:Colors.PRIMARY
        }}>Add New Pet</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  addNewPet: {
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    padding:20,
    marginTop:8,
    backgroundColor:Colors.LIGHT_PRIMARY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:15,
    borderStyle:'dashed',
    justifyContent:'center',
  }
});