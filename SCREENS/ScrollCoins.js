import React from 'react';
import {useState,useEffect} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import Axios from 'axios';
import ScrollCoinsTemplate from './ScrollCoinsTemplate';
import { useNavigation } from '@react-navigation/native';

export default function ScrollCoins(props){

const navigation = useNavigation();

const[coinsArray,setCoinsArray]=useState([]);

//GETTING COINS FROM API
useEffect(()=>{
    
const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
Axios.get(url).then(response=>{
    setCoinsArray(response.data); 
})
},[])

return(
        <View>
            <ScrollView style={{backgroundColor:'black'}}>
               {
                   coinsArray.map(i=>{
                    return(
                    <ScrollCoinsTemplate key={i.id}
                                         id={i.id}
                                         image={i.image}
                                         name={i.name}
                                         current_price={i.current_price}
                                         price_change_percentage_24h={i.price_change_percentage_24h}
                                         
                    />
                    )
                   })
               }
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({

})