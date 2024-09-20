import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors';

const AboutPet = ({pet}) => {

  const [readMore, setReadMore] = useState(true);


  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'monteserrat',fontSize:17}}>About {pet?.name}</Text>
      <Text numberOfLines={readMore?3:30} style={{fontFamily:'inter',fontSize:14}}>{pet?.about}</Text>
      {readMore&&
        <Pressable onPress={()=>setReadMore(false)}>
          <Text style={{fontFamily:'inter',fontSize:14,color:Colors.SECONDARY}}>Read More</Text>
        </Pressable>
      }
    </View>
  )
}

export default AboutPet

const styles = StyleSheet.create({})