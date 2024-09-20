import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const PetSubInfo = ({pet}) => {
  return (
    <View style={{paddingHorizontal:17}}>
      <View style={{display:'flex',flexDirection:'row'}}>
        <View style={styles.outerInfoCard}>
          <Image source={require('./../../assets/images/calendar.png')} style={{width:40,height:40}} />
          <View style={{flex:1}}>
            <Text style={{fontFamily:'poppins',fontSize:14,color:Colors.GRAY}}>Age</Text>
            <Text style={{fontFamily:'poppins-medium',fontSize:18}}>{pet?.age+" Years"}</Text>
          </View>
        </View>
        <View style={styles.outerInfoCard}>
          <Image source={require('./../../assets/images/bone.png')} style={{width:40,height:40}} />
          <View >
            <Text style={{fontFamily:'poppins',fontSize:14,color:Colors.GRAY}}>Breed</Text>
            <Text style={{fontFamily:'poppins-medium',fontSize:18}}>{pet?.breed}</Text>
          </View>
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}>
        <View style={styles.outerInfoCard}>
          <Image source={require('./../../assets/images/sex.png')} style={{width:40,height:40}} />
          <View style={{flex:1}}>
            <Text style={{fontFamily:'poppins',fontSize:14,color:Colors.GRAY}}>Sex</Text>
            <Text style={{fontFamily:'poppins-medium',fontSize:18}}>{pet?.sex}</Text>
          </View>
        </View>
        <View style={styles.outerInfoCard}>
          <Image source={require('./../../assets/images/weight.png')} style={{width:40,height:40}} />
          <View >
            <Text style={{fontFamily:'poppins',fontSize:14,color:Colors.GRAY}}>Weight</Text>
            <Text style={{fontFamily:'poppins-medium',fontSize:18}}>{pet?.weight+" Kg"}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PetSubInfo

const styles = StyleSheet.create({
  outerInfoCard: {
    display:'flex',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:Colors.WHITE,
    padding:10,
    margin:5,
    borderRadius:8,
    gap:10
  },
})