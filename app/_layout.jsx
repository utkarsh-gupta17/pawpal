import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'



const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

export default function RootLayout() {

  useFonts({
    // inter fonts
    'inter': require('./../assets/fonts/Inter_18pt-Regular.ttf'),
    'inter-semibolditalic': require('./../assets/fonts/Inter_18pt-SemiBoldItalic.ttf'),
    'inter-medium': require('./../assets/fonts/Inter_18pt-Medium.ttf'),
    'inter-bold': require('./../assets/fonts/Inter_18pt-Bold.ttf'),
    // poppins fonts
    'poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('./../assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold': require('./../assets/fonts/Poppins-Bold.ttf'),
    // monteserrat fonts
    'monteserrat': require('./../assets/fonts/Montserrat-Regular.ttf'),
    'monteserrat-italic': require('./../assets/fonts/Montserrat-Italic.ttf'),
    'monteserrat-medium': require('./../assets/fonts/Montserrat-Medium.ttf'),
    'monteserrat-bold': require('./../assets/fonts/Montserrat-Bold.ttf'),
    // roboto fonts
    'roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./../assets/fonts/Roboto-Medium.ttf'),
    'roboto-italic': require('./../assets/fonts/Roboto-Italic.ttf'),
    'roboto-bold': require('./../assets/fonts/Roboto-Bold.ttf'),
    // space mono regular fonts
    'normal':require('./../assets/fonts/SpaceMono-Regular.ttf'),
  })


  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index"
          options = {{
            headerShown:false,
          }}
          />
      </Stack>
    </ClerkProvider>
  );
}
