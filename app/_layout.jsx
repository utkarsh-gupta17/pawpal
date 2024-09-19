import { Stack } from "expo-router";
import { useFonts } from "expo-font";

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
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
        options = {{
          headerShown:false,
        }}
      />
    </Stack>
  );
}
