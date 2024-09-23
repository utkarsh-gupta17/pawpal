import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import {useAuth, useUser} from '@clerk/clerk-expo'
import Colors from '../../constants/Colors';

const Header = () => {

  const {user} = useUser();
  const { signOut } = useAuth();


  const onLogoutPress = async()=>{
    try{
      await signOut();
      console.log("User Logged Out");
    }
    catch(e){
      console.log("Logout Error",e);
    }
  }


  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <View>
        <Text style={styles.mainText}>Welcome,</Text>
        <Text style={styles.userName}>{user?.fullName}</Text>
      </View>
      <Image source={{uri:user?.imageUrl}} style={styles.userImage} />
      {/* <Pressable style={[styles.gotoBtn,{marginTop:20,backgroundColor:Colors.SECONDARY}]} onPress={onLogoutPress}> */}
          {/* <Text style={styles.gotoText}>Logout</Text> */}
      {/* </Pressable> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  mainText: {
    fontFamily: 'inter',
    fontSize: 18,
  },
  userName: {
    fontFamily: 'monteserrat-bold',
    fontSize: 25,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 99
  },
  gotoBtn: {
    padding:14,
    marginTop:100,
    backgroundColor:Colors.PRIMARY,
    width:'25%',
    borderRadius:14,
  },
  gotoText: {
    fontFamily: 'roboto-medium',
    fontSize:12,
    textAlign:'center',
  }
})