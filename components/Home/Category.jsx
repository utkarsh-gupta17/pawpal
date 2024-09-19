import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Colors from './../../constants/Colors'

const Category = ({category}) => {

  const [categoryList,setCategoryList] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState('Dogs');

  useEffect(() => {
    GetCategories();
  }, [])
  

  const GetCategories = async()=>{
    setCategoryList([]);
    const snapshot = await getDocs(collection(db,'Category'));
    snapshot.forEach((doc)=>{
      // console.log(doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()]);
    })
  }



  return (
    <View style={{
      margin:10,
    }}>
      <Text style={{
        fontFamily:'inter-medium',
        fontSize:20
      }}>Category</Text>
      <FlatList 
        numColumns={4}
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>{setSelectedCategory(item.name);category(item.name)}} style={{
            flex:1
          }}>
            <View style={[styles.container,selectedCategory==item.name&&styles.selectedCategory]}>
              <Image source={{uri:item?.imageUrl}} style={styles?.categoryImage}/>
            </View>
            <Text style={styles.categoryName}>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.LIGHT_PRIMARY,
    padding:15,
    alignItems:'center',
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.PRIMARY,
    margin:5
  },
  categoryImage: {
    width:40,
    height:40
  },
  categoryName: {
    fontFamily: 'poppins',
    fontSize:14,
    textAlign:'center'
  },
  selectedCategory: {
    backgroundColor:Colors.SECONDARY,
    borderColor:Colors.SECONDARY,
  }
});