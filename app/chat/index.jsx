import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { doc,getDoc } from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import { useUser } from '@clerk/clerk-expo';

const Chat = () => {

  const {user} = useUser();
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    GetUserDetails();
  }, [])
  
  const GetUserDetails = async()=>{
    const docRef = doc(db,'Chat',params?.id);
    const docSnap = await getDoc(docRef);

    const result = docSnap.data();
    console.log(result);

    const otherUser = result?.users.filter(item=>item.email!=user?.primaryEmailAddress?.emailAddress);
    console.log(otherUser);

    navigation.setOptions({
      headerTitle: otherUser[0].name,
      
    })
  }

  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})