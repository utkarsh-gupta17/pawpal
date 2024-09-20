import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const PetInfo = ({pet}) => {
  
  return (
    <View>
      <Image source={{uri:pet.imageUrl}} style={styles.petImg}/>
      <View style={{padding:20,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View>
          <Text style={{fontFamily:'inter-bold',fontSize:27}}>{pet?.name}</Text>
          {/* <Text style={{fontFamily:'inter-bold',fontSize:27}}>{pet?.user.email}</Text> */}
          <Text style={{fontFamily:'inter',fontSize:13,color:Colors.GRAY}}>{pet?.address}</Text>
        </View>
        <Ionicons name="heart-outline" size={30} color="red" />
      </View>
    </View>
  )
}

export default PetInfo

const styles = StyleSheet.create({
  petImg: {
    width:'100%',
    height:400,
    objectFit:'cover'
  }
})