import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScrollCoins from './SCREENS/ScrollCoins';
import CoinDetail from './SCREENS/CoinDetail'
import ScrollCoinsTemplate from './SCREENS/ScrollCoinsTemplate'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import News from './SCREENS/News'
import NewsTemplate from './SCREENS/NewsTemplate';
import SplashScreen from './SCREENS/Splash';


export default function App() {
  const Stack = createStackNavigator();
  return (
  
      <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen name="Splash" component={SplashScreen} />
               <Stack.Screen name="ScrollCoins" component={ScrollCoins} />
               <Stack.Screen name="ScrollCoinsTemplate" component={ScrollCoinsTemplate} />
               <Stack.Screen name="CoinDetail" component={CoinDetail} />
               <Stack.Screen name="NEWS" component={News} />
               <Stack.Screen name="NEWS TEMPLATE" component={NewsTemplate} />
              
            </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
