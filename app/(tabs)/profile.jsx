import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import Colors from '../../constants/Colors'

export default function Profile(){

  const {user} = useUser();
  const router = useRouter();
  const {signOut} = useAuth();
  const onPressMenu = (menu) => {
      if(menu.id == 5){
          console.log("Going Out");
          signOut({redirectUrl:'/pawpal/app/index.jsx'});
          return;
      }
      router.push(menu.path)
  }

  const Menu = [
    {
      id:1,
      name:'Add New Pet',
      icon:'add-circle',
      path:'/add-new-pet',
    },
    {
      id:2,
      name:'Favourites',
      icon:'heart',
      path:'/(tabs)/favourite',
    },
    {
      id:3,
      name:'Inbox',
      icon:'chatbubble',
      path:'/(tabs)/inbox',
    },
    {
      id:4,
      name:'My Post',
      icon:'bookmark',
      path:'/../user-post',
    },
    {
      id:5,
      name:'Logout',
      icon:'exit',
      path:'logout',
    },
  ]


  return (
    <View style={{padding:20,marginTop:20}}>
      <Text style={{fontFamily:'poppins-medium',fontSize:30}}>Profile</Text>
      <View style = {{displey : 'flex',alignItems : 'center',marginVertical : 25}}>
        <Image source={{uri:user?.imageUrl}} style={{width:80,height:80,borderRadius:99}}/>
        <Text style = {{fontFamily : 'poppins-bold',fontSize : 20,marginTop : 6}}>{user?.fullName}</Text>
        <Text style = {{fontFamily: 'monteserrat-bold',fontSize: 20,color : Colors.GRAY}}>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>
      <FlatList
        data = {Menu}
        renderItem = {({item, index}) =>(
        <TouchableOpacity
          onPress = {() => onPressMenu(item)} 
          key = {item.id}
          style = {styles.flatlist}>
            <Ionicons name = {item?.icon} size = {30} color = {Colors.PRIMARY}
                style = {{
                  padding : 10,
                  backgroundColor : Colors.LIGHT_PRIMARY,
                  borderRadius : 10 
                }}/>
            <Text style = {{fontFamily : 'inter',fontSize : 20}}>{item.name}</Text>
        </TouchableOpacity>
        )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    marginVertical : 10,
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10,
    backgroundColor : Colors.WHITE,
    padding : 10,
    borderRadius : 10
  }
});