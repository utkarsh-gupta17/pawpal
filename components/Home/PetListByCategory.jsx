import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from './PetListItem'

const PetListByCategory = () => {

  const [petList, setPetList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GetPetList('Dogs');
  }, [])
  

  const GetPetList = async(category)=>{
    setLoader(true);
    setPetList([]);
    const q = query(collection(db,'Pets'),where('category','==',category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc=>{
      // console.log(doc.data());
      setPetList(petList=>[...petList,doc.data()]);
    });
    setLoader(false);
  }

  return (
    <View style={{marginBottom:7}}>
      <Category category={(value)=>GetPetList(value)} />
      <FlatList
        data={petList}
        style={{
          marginTop:10,
        }}
        showsHorizontalScrollIndicator={false}
        refreshing={loader}
        onRefresh={()=>GetPetList('Dogs')}
        horizontal={true}
        renderItem={({item,index})=>(
          <PetListItem pet={item} />
        )}
      />
    </View>
  )
}

export default PetListByCategory

const styles = StyleSheet.create({})