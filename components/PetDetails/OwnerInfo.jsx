import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const OwnerInfo = ({pet}) => {

  // console.log(JSON.stringify(pet.user));
  const user = pet.user;
  // console.log(user);
  // console.log(JSON.stringify(user, null, 2));


  return (
    <View style={styles.ownerCard}>
      <View style={{display:'flex',flexDirection:'row',gap:20}}>
        {/* <Text>{JSON.stringify(pet.user)}</Text> */}
        <Image source={{uri:user.imageUrl}} style={{width:40,height:40,borderRadius:99}}/>
        <View>
          <Text style={{fontFamily:'poppins',fontSize:17}}>{user?.name}</Text>
          <Text style={{fontFamily:'inter',fontSize:17,color:Colors.GRAY}}>Pet Owner</Text>
        </View>
      </View>
      <Ionicons name="send-sharp" size={24} color={Colors.PRIMARY} />
    </View>
  )
}

export default OwnerInfo

const styles = StyleSheet.create({
  ownerCard: {
    marginHorizontal:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:15,
    padding:20,
    backgroundColor:Colors.WHITE,
    justifyContent:'space-between'
  }
})