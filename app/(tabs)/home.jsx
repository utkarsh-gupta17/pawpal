import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import PetListByCategory from '../../components/Home/PetListByCategory';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

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
      {/* List of Pets */}
      <TouchableOpacity style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        padding:20,
        marginTop:20,
        backgroundColor:Colors.LIGHT_PRIMARY,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:15,
        borderStyle:'dashed',
        justifyContent:'center'
        }}>
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