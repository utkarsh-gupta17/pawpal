import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const PetListItem = ({pet}) => {
  return (
    <View style={{
      padding:10,
      marginRight:15,
      backgroundColor:Colors.WHITE,
      borderRadius:10
    }}>
      <Image source={{uri:pet?.imageUrl}} style={{
        width:150,
        height:135,
        objectFit:'cover',
        borderRadius:10
      }} />
      <Text style={{
        fontFamily:'poppins',
        fontSize:18
      }}>{pet?.name}</Text>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:Colors.GRAY,fontFamily:'roboto'}}>{pet?.breed}</Text>
        <Text style={{
          fontFamily:'inter',
          color:Colors.PRIMARY,
          backgroundColor:Colors.LIGHT_PRIMARY,
          paddingHorizontal:7,
          fontSize:11,
          borderRadius:10,
          }}>{pet.age} years</Text>
      </View>
    </View>
  )
}

export default PetListItem

const styles = StyleSheet.create({})