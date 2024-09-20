import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Shared from '../../Shared/Shared'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from '../../components/Home/PetListItem'

const Favourite = () => {

  const {user} = useUser();

  const [favIds, setFavIds] = useState([]);
  const [favPetList, setFavPetList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    user&&GetFavPetIds();
  }, [user])
  

  const GetFavPetIds = async()=>{
    setFavIds([]);
    setLoader(true);
    const result = await Shared.GetFavList(user);
    setFavIds(result?.favourites);
    setLoader(false);

    GetFavPetList(result?.favourites);
  }

  const GetFavPetList = async(favId_)=>{
    setLoader(true);
    setFavPetList([]);
    console.log(favId_);
    const q = query(collection(db,'Pets'),where('id','in',favId_));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setFavPetList(prev=>[...prev,doc.data()]);
    });
    setLoader(false);
  }


  return (
    <View style={{padding:20,marginTop:20}}>
      <Text style={{fontFamily:'roboto-medium',fontSize:30}}>Favourites</Text>
      <FlatList data={favPetList} onRefresh={GetFavPetIds} refreshing={loader} numColumns={2} renderItem={({item,index})=>(
        <View key={index}>
        <PetListItem pet={item}/>
        </View>
      )}/>
    </View>
  )
}

export default Favourite