import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const InitialLayout = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    'ToThePointRegular': require('../assets/fonts/ToThePointRegular.ttf'),
    'BrownieStencil': require('../assets/fonts/BrownieStencil.ttf'),
    'Queensides': require('../assets/fonts/Queensides.ttf'),
  });

  useEffect(() => {
    if(!fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return <Slot/>;
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <InitialLayout />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
