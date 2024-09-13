import { Slot, SplashScreen, Stack } from "expo-router";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts(
    {
      'Cabin-Regular' : require('../assets/fonts/cabin/Cabin-Regular.ttf'),
      'Cabin-Bold' : require('../assets/fonts/cabin/Cabin-Bold.ttf'),
      'Cabin-SemiBold' : require('../assets/fonts/cabin/Cabin-SemiBold.ttf'),
      'Cabin-Medium' : require('../assets/fonts/cabin/Cabin-Medium.ttf'),
      'Fredoka-Regular' : require('../assets/fonts/fredoka/Fredoka-Regular.ttf'),
      'Fredoka-Bold' : require('../assets/fonts/fredoka/Fredoka-Bold.ttf'),
      'Fredoka-SemiBold' : require('../assets/fonts/fredoka/Fredoka-SemiBold.ttf'),
      'Fredoka-Light' : require('../assets/fonts/fredoka/Fredoka-Light.ttf')

    }
  )
  useEffect(() => {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded,error])
if(!fontsLoaded && !error) return null;
  return (
   <Stack >
    <Stack.Screen name='index' options={{headerShown: false}} />
    <Stack.Screen name='(auth)' options={{headerShown: false}} />

   </Stack>
  );
}
