import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Bai4Component = () => {
  const[count,setCount] = useState(0);
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Bạn đã nhấn nút: {count} lần</Text>
      <TouchableOpacity
        style={{height:20, marginTop:5}}
        onPress={() => setCount(count+1)}> 
        <Text style={{color:'blue', fontWeight:'bold'}}>
          Nhấn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{height:20, marginTop:5}}
        onPress={() => setCount(0)}> 
        <Text style={{color:'blue', fontWeight:'bold'}}>
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default Bai4Component