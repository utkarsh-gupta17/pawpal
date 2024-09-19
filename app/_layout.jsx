import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {

  useFonts({
    'poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('./../assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold': require('./../assets/fonts/Poppins-Bold.ttf'),
    'monteserrat': require('./../assets/fonts/Montserrat-Regular.ttf'),
    'monteserrat-italic': require('./../assets/fonts/Montserrat-Italic.ttf'),
    'roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./../assets/fonts/Roboto-Medium.ttf'),
    'normal':require('./../assets/fonts/SpaceMono-Regular.ttf'),
  })


  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
