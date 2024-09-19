import { Link, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const rootNavigationState = useRootNavigationState();

  useEffect(()=>{
    CheckNavigationLoaded();
  },[])

  const CheckNavigationLoaded = ()=>{
    if(!rootNavigationState.key){
      return null;
    } 
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={'/login'}>
        <Text style={{fontSize:70}}>Go to Login Screen</Text>
      </Link>
    </View>
  );
}
