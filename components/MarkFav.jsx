import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Shared from '../Shared/Shared';
import { useUser } from '@clerk/clerk-expo';

const MarkFav = ({pet,color='black'}) => {

  const {user} = useUser();

  const [favList, setFavList] = useState();

  useEffect(() => {
    user&&GetFav();
  }, [user]);

  const GetFav = async()=> {
    const result = await Shared.GetFavList(user);
    console.log("GetFavList at work");
    console.log(result);
    setFavList(result?.favourites ? result?.favourites : []);
  }

  const AddToFav = async()=> {

    const favResult = favList;
    favResult.push(pet?.id);
    console.log("AddToFav");
    // console.log(pet);
    console.log(pet.id);
    // console.log(pet['name']);
    await Shared.UpdateFav(user,favResult);
    GetFav();
  }
  
  const removeFromFav = async()=>{
    const favResult = favList.filter(item=>item!=pet.id);
    console.log("removeFromFav");
    console.log(pet.id);
    await Shared.UpdateFav(user,favResult);
    GetFav();
  }


  return (
    <View>
      {favList?.includes(pet.id)?
        <Pressable onPress={removeFromFav}>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
        : 
        <Pressable onPress={AddToFav}>
          <Ionicons name="heart-outline" size={30} color={color} />
        </Pressable>
    }
    </View>
  )
}

export default MarkFav

const styles = StyleSheet.create({})