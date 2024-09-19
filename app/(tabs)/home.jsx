import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';

const Home = () => {
  return (
    <View style={{
      padding:20,
      marginTop:20,
    }}>
      {/* Header */}
      <Header/>
      {/* Slider */}
      <Slider/>
      {/* Category */}
      {/* List of Pets */}
    </View>
  )
}

export default Home;