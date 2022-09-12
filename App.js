import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const name = "Matheus J";

  const [loaded] = useFonts({
    Maven: require('./assets/fonts/MavenPro-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name={name} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
