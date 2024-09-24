import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';
import { useUser } from '@clerk/clerk-expo';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

const PetDetails = () => {

  const pet = useLocalSearchParams();
  const navigation = useNavigation();
  const { user } = useUser();
  const router = useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerTransparent:true,
      headerTitle: ''
    })
  },[]);


  const InitiateChat = async ()=>{
    const docId1 = user?.primaryEmailAddress.emailAddress+'_'+pet?.email;
    const docId2 = pet?.email+'_'+user?.primaryEmailAddress.emailAddress;

    const q = query(collection(db,'Chat'),where('id','in',[docId1,docId2]));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc=>{
      console.log(doc.data());
      router.push({
        pathname:'/chat',
        params:{id:doc.id}
      })
    })  

    if(querySnapshot.docs?.length==0){
      await setDoc(doc(db,'Chat',docId1),{
        id:docId1,
        users: [
          {
            email: user?.primaryEmailAddress.emailAddress,
            imageUrl:user?.imageUrl,
            name:user?.fullName
          },
          {
            email:pet?.userEmail,
            imageUrl:pet?.userImage,
            name:pet?.userName
          }
        ],
        userIds: [user?.primaryEmailAddress.emailAddress,pet?.userEmail]
      });
      router.push({
        pathname:'/chat',
        params:{id:docId1}
      })
    }

  }


  return (
    <View>
      <ScrollView>
        {/* <Text>{JSON.stringify(pet)}</Text> */}
        {/* Pet Info */}
          <PetInfo pet={pet} />
        {/* Pet Properties */}
          <PetSubInfo pet={pet} />
        {/* about */}
          <AboutPet pet={pet} />
        {/* owner details */}
          <OwnerInfo pet={pet} />
          <View style={{height:70}}></View>   
          {/* the above is for getting extra height below */}
        {/* adopt me */}
      </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.adoptBtn} onPress={InitiateChat}>
            <Text style={{textAlign:'center',
              fontFamily:'poppins-bold',
              fontSize:18
            }}>Adopt Me ;)</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default PetDetails

const styles = StyleSheet.create({
  bottomContainer: {
    position:'absolute',
    width:'100%',
    bottom:0

  },
  adoptBtn: {
    padding:15,
    backgroundColor:Colors.PRIMARY,

  }
})