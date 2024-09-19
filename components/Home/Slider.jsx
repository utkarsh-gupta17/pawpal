import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore';
import {db} from './../../config/FirebaseConfig';

const Slider = () => {

  const [sliderList,setSliderList] = useState([]);

  useEffect(() => {
    GetSliders();
  }, [])
  

  const GetSliders = async()=>{
    setSliderList([]);
    const snapshot = await getDocs(collection(db,'Sliders'));
    snapshot.forEach((doc)=>{
      console.log(doc.data());
      setSliderList(sliderList=>[...sliderList,doc.data()]);
    })
  }

  return (
    <View style={{marginTop:15}}>
      <FlatList 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <View>
            <Image source={{uri:item?.imageUrl}} style={styles?.sliderImg}/>
          </View>
        )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  sliderImg: {
    width: Dimensions.get('screen').width*0.9,
    borderRadius:15,
    height:170,
    marginRight:15
  }
})