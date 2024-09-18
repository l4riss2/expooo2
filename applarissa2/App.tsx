import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function App () {
  return(
      <View>
        <View>
            <Text>Box1</Text>
        </View>
        <View>
          <Text>Box1</Text>
        </View>
      </View>

    )

}


const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : '#f0f0f0',
    },
    box1:{
        width:100,
        height:100,
        backgroundColor : '#f0f0f0',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    box2:{
        width:100,
        height:100,
        backgroundColor : 'lightcoral',
        justifyContent:'center',
        alignItems:'center',
    },
  
});
