import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'


const Bai7Component = () => {
  const[name, setName] = useState("")
  return (
    <View style={bai7Style.container}>
        <Text style={bai7Style.label}>What is your name ?</Text>
        <TextInput 
            placeholder="Nguyen Trung Tinh"
            style={bai7Style.input}
            onChangeText={setName}
            value={name}
            />
        <Button 
            title="Say Hello"
            onPress={()=>{
                Alert.alert(`Thông báo`, `Xin chào ${name}!`)
                setName("")
        }}/>
    </View>
  )
}
export default Bai7Component
var bai7Style = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
       
    },
    label:{
        marginTop:30,
        fontWeight: 'bold',
        fontSize: 18
    },

    input: {
        marginTop:10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        padding:10
    }
  
})