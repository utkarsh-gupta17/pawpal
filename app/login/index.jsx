import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'


export default function index() {
  return (
    <View style={styles.bg}>
      <Image source={require('./../../assets/images/login.png')} style={styles.loginImage}/>
      <View style={styles.mainTextDiv}>
        <Text style={styles.mainText}>Ready to make a friend?</Text>
        <Text style={styles.mainSubText}>Let's adopt the pet which you like and make their life happy again</Text>
        <Pressable style={styles.gotoBtn}>
          <Text style={styles.gotoText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor:Colors.WHITE,
    height:'100%',
  },
  loginImage: {
    width:'100%',
    height:500,
  },
  mainTextDiv: {
    padding:20,
    display:'flex',
    alignItems:'center',
  },
  mainText: {
    fontFamily:'poppins-medium',
    fontSize:25,
    textAlign:'center',
  },
  mainSubText: {
    fontFamily:'inter-medium',
    fontSize:20,
    textAlign:'center',
    color:Colors.PRIMARY
  },
  gotoBtn: {
    padding:14,
    marginTop:100,
    backgroundColor:Colors.PRIMARY,
    width:'100%',
    borderRadius:14
  },
  gotoText: {
    fontFamily:'roboto-medium',
    fontSize:20,
    textAlign:'center',
  }
});