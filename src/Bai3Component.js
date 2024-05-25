import { View, Text, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
const Button = (props) => (
    <TouchableHighlight
    onPress={props.onPress}
    style={{
        backgroundColor:'pink',
        margin:10,
        padding:10,
        ...props.buttonStyle,
    }}>

    <Text style={{color:'white', fontWeight:'bold'}}>{props.text}</Text>
    </TouchableHighlight> 

);
const Bai3Component = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Button text="Say Hello" onPress={()=>alert('Hello')}></Button>
    <Button text="Say Goodbye" 
            onPress={() => alert('Goodbye')}
            buttonStyle = {{backgroundColor:'aqua'}}
            ></Button>
</View>
  )
}
export default Bai3Component