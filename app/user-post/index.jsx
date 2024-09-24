import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import {useNavigation} from 'expo-router';
import {db} from '../../config/FirebaseConfig';
import{useUser} from '@clerk/clerk-expo';
import { collection, getDocs, where, query } from 'firebase/firestore';
import Colors from '../../constants/Colors';

export default function UserPost() {
    const navigation = useNavigation();
    const {user} = useUser();
    const [loader, setLoader] = useState(false);
    const [userPostList, setUserPostList] = useState([]);
    useEffect(() =>{
        navigation.setOptions({
            headerTitle : 'User Post'
        })
        user&&GetUserPost();
    },[user]);

    /**
     * Used to user post
     */
    const GetUserPost = async() => {
        setLoader(true);
        setUserPostList([]);
        const q = query(collection(db, 'Pets'), where('email', '==',user?.primaryEmailAddress?.emailAddress));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setUserPostList(prev => [...prev, doc.data()])
        })
        setLoader(false);
    }

    const OnDeletePost = (docId) => {
        Alert.alert('Do you want to Delete?','Do you really want to delete this post?'[{
            text : 'Cancel',
            onPress : () => console.log("Cancel Click"),
            style : 'cancel'
        },
        {
            text: 'Delete',
            onPress: () => OnDeletePost(docId),
        }])
    }

    const deletePost = async(docId) => {
        await deleteDoc(doc(db, 'Pets', docId));
        GetUserPost();
    }

    return (
        <View style = {{
            padding : 20
        }}>
            <Text style = {{
                fontFamily : 'poppins-medium',
                fontSize : 30
            }}>UserPost</Text>
            <FlatList 
                data = {userPostList}
                numColumns = {2}
                refreshing = {loader}
                onRefresh = {GetUserPost}
                renderItem = {({item, index}) => (
                    <View>
                        <PetListItem 
                            pet = {item}
                            key = {index} 
                        />
                        <Pressable 
                            onPress = {() => OnDeletePost(item?.id)}
                            style = {styles.deleteButton}
                        >
                            <Text style = {{
                                fontFamily : 'poppins',
                                textAlign : 'center'
                            }}>Delete</Text>
                        </Pressable>
                    </View>
                )}
            />
            {userPostList?.length == 0 &&<Text>No Post Found</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    deleteButton : {
        backgroundColor : Colors.LIGHT_PRIMARY, 
        padding : 5,
        borderRadius : 7,
        marginTop : 5,
        marginRight : 10
    }
})
