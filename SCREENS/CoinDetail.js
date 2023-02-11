import React from 'react';
import {View,StyleSheet,Text,Button,ActivityIndicator,Alert} from 'react-native';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { VictoryLine,VictoryBar, VictoryChart,VictoryPie, VictoryTheme } from "victory-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from './News'



export default function CoinDetail({route}){
 const navigation = useNavigation();
 const CoinName=route.params.data.CoinName;
 

//COIN DATA
 const[coinData,setCoinData]=useState([]);
 //PERIOD
 const[period,setPeriod]=useState(15);

 useEffect(()=>{
  getData()
 },[period])


 //GETTING DATA FROM API
 function getData(){
  const url="https://api.coingecko.com/api/v3/coins/"+`${CoinName}`+"/market_chart?vs_currency=inr&days="+`${period}`;
  //console.warn(url)
    axios.get(url).then(response=>{
        const formatedData=response.data.prices.map(i=>{
            return({x:i[0],
                    y:i[1]})
        });
    setCoinData(formatedData);
   
    });
 }


 return(

    <View style={{backgroundColor:'black',height:200}}>
             <Text style={styles.coinTitle}>{CoinName}</Text> 
             <Text style={{color:"white",fontSize:12,marginTop:25}}>CHART : {period} DAYS</Text>
            
             
            
             
            <View style={styles.chartBackground}>
                  
                    <VictoryChart width={430} height={450}   style={styles.chart} animate={{duration:500}} >
                        <VictoryLine data={coinData} x="x" y="y"
                            style={{data:{stroke:'blue',strokeWidth:1}}}/>
                    </VictoryChart>

                    <Text style={{color:"white",fontSize:12}}>VOLUME : {period} DAYS</Text>
                    <VictoryChart width={400} height={170} style={styles.chart}  domainPadding={10}>
                            
                            <VictoryBar  data={coinData} x="x" y="y" 
                            style={{data:{stroke:'grey',strokeWidth:`1`}}}/>

                    </VictoryChart>

                    <View style={styles.button_Container}>
                            <Button title="15 DAYS"  onPress={()=>{setPeriod(15);Alert.alert('Fetching...please wait for 5 sec and press ok')}}/>
                            <Button title="30 DAYS"  onPress={()=>{setPeriod(30);Alert.alert('Fetching...please wait for 5 sec and press ok')}}/>
                            <Button title="90 DAYS"  onPress={()=>{setPeriod(90);Alert.alert('Fetching...please wait for 5 sec and press ok')}}/>
                            <Button title="1 YEAR"   onPress={()=>{setPeriod(365);Alert.alert('Fetching...please wait for 5 sec and press ok')}}/>
                    </View>
                
                </View>

             <Button title="NEWS"  style={styles.news} onPress={()=>{navigation.navigate('NEWS',{CoinName:CoinName})}}/>
            
    </View>)
  
 

}

const styles=StyleSheet.create({
    coinTitle:{
        fontSize:20,
        marginTop:20,
        color:"white",
        alignSelf:'center'
    },
    chartBackground:{
        backgroundColor:'black'
    },
    chart:{
      borderRadius:5
    },
    button_Container:{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:"row",
        marginTop:30,
        marginBottom:62
    },
    news:{
        marginTop:3,
        borderWidth:5,
        borderColor:'red'
    }
})
