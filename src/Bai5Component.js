import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'


const SquareBox = ({title, bgColor}) =>{
    return(
        <View style={[bai5Style.box, {backgroundColor: bgColor}]}>
        <Text style={{fontWeight:'bold', color:'white'}}>{title}</Text>
    </View>
    )
  
}
const Bai5Component = () => {
  return (
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <SquareBox title="Box 1" bgColor="red"/>
        <SquareBox title="Box 2" bgColor="green"/>
        <SquareBox title="Box 3" bgColor="blue"/>
    </View>
  )
}
export default Bai5Component
var bai5Style = StyleSheet.create({
    box:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})