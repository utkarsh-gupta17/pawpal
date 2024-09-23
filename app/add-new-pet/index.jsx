import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import {Picker} from '@react-native-picker/picker';
import { collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import storage from './../../config/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';


const AddNewPet = () => {

  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    category:'Dogs',sex:"Male"
  });
  const [gender, setGender] = useState();
  const [categoryList,setCategoryList] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState();
  const [image,setImage] = useState();
  const { user } = useUser();
  const [loader,setLoader] = useState(false);
  const router = useRouter();


  useEffect(()=>{
    navigation.setOptions({
      headerTitle: 'Add New Pet'
    })
    GetCategories();
  },[]);
  

  const GetCategories = async()=>{
    setCategoryList([]);
    const snapshot = await getDocs(collection(db,'Category'));
    snapshot.forEach((doc)=>{
      // console.log(doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()]);
    })
  }

  const handleInputChange = (fieldName,fieldValue)=>{
    // console.log(fieldName,fieldValue);
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }

  const onSubmit = ()=>{
    console.log(formData);
    if(Object.keys(formData).length!=8){
      ToastAndroid.show('Enter All Details',ToastAndroid.TOP);
      return;
    }
    UploadImage();
  }
  
  const UploadImage = async()=>{
    setLoader(true);
    const res = await fetch(image);
    const blobImage = await res.blob();
    const storageRef = ref(storage,'PetAdopt'+Date.now()+'.jpg');

    uploadBytes(storageRef,blobImage).then((snapshot)=>{
      console.log('File Uploaded');
    }).then(resp=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
        SaveFormData(downloadUrl);
      })
    });
  }

  const SaveFormData = async(imageUrl)=>{
    const docId = Date.now().toString();
    await setDoc(doc(db,'Pets',docId),{
      ...formData,
      imageUrl:imageUrl,
      userName:user?.fullName,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userImage:user?.imageUrl,
      id:docId,
    });
    setLoader(false);
    router.replace('/(tabs)/home');
  }


  const imagePicker = async ()=>{
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <ScrollView style={{padding:20}}>
      <Text>AddNewPet</Text>
      <Pressable onPress={imagePicker}>
        {
          !image ? <Image source={require('./../../assets/images/paw.png')} style={styles.pawImage} />
          : <Image source={{uri:image}} style={styles.pawImage} />
        }
      </Pressable>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Name*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('name',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Category*</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCategory(itemValue);
            handleInputChange('sex',itemValue);
          }}>
          {
            categoryList.map((category,index)=>(
              <Picker.Item key={index} label={category.name} value={category.name} />
            ))
          }
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Breed*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('breed',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age*</Text>
        <TextInput keyboardType='number-pad' style={styles.input} onChangeText={(value)=>handleInputChange('age',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender*</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => {
            setGender(itemValue);
            handleInputChange('sex',itemValue);
          }}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight*</Text>
        <TextInput keyboardType='number-pad' style={styles.input} onChangeText={(value)=>handleInputChange('weight',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address*</Text>
        <TextInput style={styles.input} onChangeText={(value)=>handleInputChange('address',value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>About*</Text>
        <TextInput numberOfLines={5} multiline={true} style={styles.input} onChangeText={(value)=>handleInputChange('about',value)}/>
      </View>

      <TouchableOpacity style={styles.submit} onPress={onSubmit} disabled={loader}>
        {loader
          ? <ActivityIndicator size={'large'}/>
          : <Text style={{fontFamily:'inter',textAlign:'center'}}>Submit</Text>
        }
      </TouchableOpacity>

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
    marginBottom:50,
  }
})