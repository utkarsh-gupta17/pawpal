import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'

const UserItem = ({userInfo}) => {
  return (
    <Link href={'/chat?id='+userInfo.docId}>
      <View style={styles.container}>
        <Image source={{uri:userInfo?.imageUrl}} style={styles.userImage} />
        <Text style={styles.userText}>{userInfo?.name}</Text>
      </View>
      <View style={{borderWidth:0.3,marginVertical:7,borderColor:Colors.GRAY}}></View>
    </Link>
  )
}

export default UserItem

const styles = StyleSheet.create({
  userImage: {
    width:40,
    height:40,
    borderRadius:99
  },
  container: {
    marginVertical:7,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },
  userText: {
    fontFamily: 'monteserrat',
    fontSize:20
  }
})