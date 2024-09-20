import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useRouter } from 'expo-router';
import MarkFav from '../MarkFav';

const PetListItem = ({pet}) => {

  const router = useRouter();


  return (
    <TouchableOpacity style={styles.cardStyle} onPress={()=>router.push({
      pathname:'/pet-details',
      params:pet,
    })}>
      <View style={{position:'absolute',zIndex:10,right:10,top:10}}>
        <MarkFav pet={pet} color={Colors.WHITE}/>
      </View>
      <Image source={{uri:pet?.imageUrl}} style={styles.petImg} />
      <Text style={{ fontFamily:'poppins', fontSize:18 }}>{pet?.name}</Text>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:Colors.GRAY,fontFamily:'roboto'}}>{pet?.breed}</Text>
        <Text style={styles.petAge}>{pet.age} years</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PetListItem

const styles = StyleSheet.create({
  cardStyle: {
    padding:10,
    marginRight:15,
    backgroundColor:Colors.WHITE,
    borderRadius:10
  },
  petImg: {
    width:150,
    height:135,
    objectFit:'cover',
    borderRadius:10
  },
  petAge: {
    fontFamily:'inter',
    color:Colors.PRIMARY,
    backgroundColor:Colors.LIGHT_PRIMARY,
    paddingHorizontal:7,
    fontSize:11,
    borderRadius:10,
  }
})