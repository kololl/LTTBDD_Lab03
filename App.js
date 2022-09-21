import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
  Stack,
   } from "react-native";
 
export default function App(){
  return(
      <View style={style.container}>
  <ImageBackground 
  source ={ require('./image/background.png')}
  style={{
    height:'100%',
    width:'100%',
  }}
>
    
    <Image style={{
      height:142,
      width:142,
      paddingRight:30,
      margin:120,
    }}
      source={require('./image/circle.png')}/>
  
   <View >
    <Text style={{fontSize:30,
                  color:'#000000',
                  fontWeight:'bold',
                  textAlign:'center',
                  marginTop:-50}}> GROW YOUR BUSINESS</Text>
    <Text style={{fontSize:20,
                  color:'#000000',
                  textAlign:'center'
                  }}> We will help you to grow your business using
                  online server</Text> 

   <Button style={{width:'152',
                  height:45,
                  top:471,
                  margin:30,
                  textAlign:'#E3C000'
                  }} title="LOGIN" />  
    <Text style={{fontSize:30,
                  color:'#000000',
                  fontWeight:'bold',
                  textAlign:'center',
                  marginTop:100}}> HOW WE WORK?</Text>
    
  </View>
  
  

  </ImageBackground> 
  
  
  </View>
  
  );
}
const style=StyleSheet.create({
container:{
  justifyContent:'center',
  alignItems:'center',
  flex:1,
}

})

