import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Touchable, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

// import { useColorScheme } from '@/components/useColorScheme';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


const tokenCache = {
  async getToken(key: string): Promise<string | null> {
    try{
      return SecureStore.getItemAsync(key);
} catch (err) {
  return null;

  }

},
async saveToken(key: string, value: string): Promise<void>{
  try{
    return SecureStore.setItemAsync(key, value);
  } catch (err) {
    // return null;
  }
}
};


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
  'mon' : require('../assets/fonts/Montserrat-Regular.ttf'),
  'mon-b' : require('../assets/fonts/Montserrat-Bold.ttf'),
    'mon-sb' : require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return(
  <ClerkProvider publishableKey ={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
 <RootLayoutNav />;

  </ClerkProvider>
);

}

function RootLayoutNav() {
  const router = useRouter();

  const {isLoaded , isSignedIn} = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/(modals)/login');
    }
  } , [isLoaded, isSignedIn]);

  return (
   
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login" options={{
          title: 'Login or SignUp',
          headerTitleStyle: {
            fontFamily: 'mon-sb',
          },
              presentation: 'modal',
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
              )
        }}/> 
        <Stack.Screen name='listing/[id]' options={{headerTitle : " "}} >
 </Stack.Screen>

 <Stack.Screen name="(modals)/booking" 
 options={{
  presentation: 'transparentModal',
  animation: 'fade',
  headerLeft: () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="close-outline" size={24} color="black" />
    </TouchableOpacity>
  ),
 
 }} />
  
  


      </Stack>
   
  );
}