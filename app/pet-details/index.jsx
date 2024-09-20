import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';

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
          <TouchableOpacity style={styles.adoptBtn}>
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