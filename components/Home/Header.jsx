import { View, Text } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'

const Header = () => {

  const {user} = useUser();

  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

export default Header