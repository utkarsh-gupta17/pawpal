import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router';
import Colors from '../../constants/Colors';
import {Picker} from '@react-native-picker/picker';

const AddNewPet = () => {

  const navigation = useNavigation();

  const [formData, setFormData] = useState(second)

  useEffect(()=>{
    navigation.setOptions({
      headerTitle: 'Add New Pet'
    })
  },[]);

  const handleInputChange = (fieldName,fieldValue)=>{
    // console.log(fieldName,fieldValue);
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }

  return (
    <ScrollView style={{padding:20}}>
      <Text>AddNewPet</Text>
      <Image source={require('./../../assets/images/paw.png')} style={styles.pawImage} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Name*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('name',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Breed*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('breed',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('age',value)}/>
      </View>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('weight',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('address',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>About*</Text>
        <TextInput numberOfLines={5} multiline={true} style={styles.input} onChangeText={(value)=>handleInputChange('about',value)}/>
      </View>

      <TouchableOpacity style={styles.submit}>
        <Text style={{fontFamily:'inter',textAlign:'center'}}>Submit</Text>
      </TouchableOpacity>

      <View style={{height:70}}></View>   
      {/* the above is for getting extra height below */}

    </ScrollView>
  )
}

export default AddNewPet

const styles = StyleSheet.create({
  pawImage: {
    width:100,
    height:100,
    borderRadius:15,
    borderWidth:1,
    borderColor:Colors.GRAY,
  },
  inputContainer: {
    marginVertical:5,
  },
  input: {
    padding:10,
    backgroundColor:Colors.WHITE,
    borderRadius:7,
    fontFamily: 'poppins'
  },
  label: {
    marginVertical:5,
    fontFamily:'monteserrat',
  },
  submit: {
    padding:15,
    marginVertical:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:8,
  }
})