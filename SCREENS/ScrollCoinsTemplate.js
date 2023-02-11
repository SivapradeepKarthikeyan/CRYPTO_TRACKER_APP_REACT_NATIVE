import React from 'react';
import{View,StyleSheet,Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ScrollCoinsTemplate(props){
 const navigation = useNavigation();

    //COLOR CHECK
    let isHigh=false;
    if(props.price_change_percentage_24h>=0)
    {
        isHigh=true
    }

    //GO COIN DETAIL
    function goCoinDetail(){
        const data={CoinName:props.id}
        navigation.navigate('CoinDetail',{data})
    }

    return(
        <View>
            <View style={styles.parent}>
                <Image source={{uri:props.image}} style={styles.image}/>
                    <View style={styles.details}>
                        <Text style={styles.detail}>{props.name}</Text>
                        <Text style={styles.detail}>{props.current_price}</Text>
                    </View>
                <Text style={isHigh ? styles.isHighGreen : styles.isHighRed}>{props.price_change_percentage_24h}</Text>
                <Text style={styles.view} onPress={()=>{goCoinDetail()}}>VIEW</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
parent:{
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:'black',
    padding:2,
    margin:5,
    width:'100%'
},
image:{
    height:50,
    width:50,
  //  borderRadius:5
},
details:{
    display:'flex',
    marginLeft:20
},
detail:{
    fontSize:12,
    fontWeight:'bold',
    color:"white"
},
isHighGreen:{
    fontSize:12,
    fontWeight:'bold',
    color:"green"
},
isHighRed:{
    fontSize:12,
    fontWeight:'bold',
    color:"red"
},
view:{
    color:"blue",
    fontSize:15
}
})