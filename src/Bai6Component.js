import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 13, 14, 15]
const SquareBox = ({title, bgColor="blue"}) =>{
    return(
        <View style={[bai6Style.box, {backgroundColor: bgColor}]}>
        <Text style={{fontWeight:'bold', color:'white'}}>{title}</Text>
    </View>
    )
  
}
const Bai6Component = () => {
  return (
    <ScrollView style={bai6Style.container}>
        {data.map((item, index) =>{
            return(
                <SquareBox key={item} title={`Box ${index + 1}`}></SquareBox>
            )
        }
        )
        }
    </ScrollView>
  )
}
export default Bai6Component
var bai6Style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    box:{
        width:100,
        height:100,
        margin:20,
        justifyContent:'center',
        alignItems:'center'
    }
})