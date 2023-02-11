import React from 'react';
import {View,StyleSheet,Text,Image,Share} from 'react-native';
import { Linking } from 'react-native';
import MaterialIcons from '@expo/vector-icons';


export default function NewsTemplate(props){


function share(url){

    Share.share({
        title:'NEWS',
        message:url,
        
        })

 }
    return(
        <View style={styles.container}>
            <Image source={{uri:props.urlToImage}} style={styles.Image}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.data}>
                <Text style={{color:'white'}} >BY <Text style={{color:'green'}}>{props.author}</Text></Text>
                {/* <Text>{props.publishedAt}</Text> */}
            </View>
            <Text style={{color:'white'}}>SOURCE : <Text style={{color:'green'}}>{props.source}</Text></Text>
            
            <Text style={{color: 'blue'}}
             onPress={() => Linking.openURL(props.url)}>
              VIEW FULL NEWS
            </Text>

            <Text style={{color: 'blue'}}
             onPress={() =>share(props.url)}>
              SHARE
            </Text>
                   
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        marginTop:20,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'black',
        padding:0,
        borderRadius:3,
        marginBottom:20,
       
    },
    title:{
       fontSize:25 ,
       fontWeight:'bold',
       marginTop:10,
       color:'#ffffff'
    },
    Image:{
        height:250,
        width:'100%',
        borderRadius:5,
    },
    description:{
        fontSize:15,
        fontWeight:'900',
        marginTop:10,
        color:'#ffffff'
    },
    data:{
        flexDirection:'row',
        marginTop:10,
        color:'#ffffff'
    }

})