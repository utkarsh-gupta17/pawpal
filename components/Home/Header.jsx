import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'

const Header = () => {

  const {user} = useUser();

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
})