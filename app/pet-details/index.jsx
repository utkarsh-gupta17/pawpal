import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';

const PetDetails = () => {

  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerTransparent:true,
      headerTitle: ''
    })
  },[]);


  return (
    <View>
      <Text>{JSON.stringify(pet)}</Text>
      {/* Pet Info */}
      {/* Pet Properties */}
      {/* about */}
      {/* owner details */}
      {/* adopt me */}
    </View>
  )
}

export default PetDetails

const styles = StyleSheet.create({})