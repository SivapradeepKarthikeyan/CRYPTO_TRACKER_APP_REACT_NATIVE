import React from 'react';
import{View,StyleSheet,Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import SplashImage from '.././SplashImage.jpg';

export default function Splash(props){
const navigation = useNavigation();

setTimeout( () => {
  navigation.navigate('ScrollCoins');
  },6000);

return(
    <View>
       <Image source={require('.././assets/SplashImage.jpg')} style={styles.image}/>
    </View>
)
}

const styles=StyleSheet.create({
    image:{
      height:900,
      width:'100%'
    }
})