import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieScreen from "./src/screen/MovieScreen"
import HomeScreen from "./src/screen/HomeScreen"
import Authcreen from "./src/screen/AuthScreen"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={Authcreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
