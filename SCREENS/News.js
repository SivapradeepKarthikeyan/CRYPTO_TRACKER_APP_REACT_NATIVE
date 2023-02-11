import React from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useState,useEffect} from 'react';
import axios from 'axios';
import NewsTemplate from './NewsTemplate'

export default function News(props){
const route=useRoute();
const CoinName=route.params.CoinName;
const[newsArray,setNewsArray]=useState([]);

useEffect(()=>{
    
    const url="https://newsapi.org/v2/everything?q="+`${CoinName}`+"&apiKey=892a6535a50e4321a237b8389d75cc78";
    axios.get(url).then(response=>{
        setNewsArray(response.data.articles);
    })

},[])

 return(
     <View>
          <ScrollView style={{backgroundColor:'black'}}>
              {
                  newsArray.map(i=>{
                      return(
                          <NewsTemplate key={i.title}
                                    title={i.title}
                                    urlToImage={i.urlToImage}
                                    description={i.description}
                                    author={i.author}
                                    publishedAt={i.publishedAt}
                                    source={i.source.name}
                                    url={i.url}
                                    /> 
                        )
                  })
              }




              
          </ScrollView>
     </View>
 )
}