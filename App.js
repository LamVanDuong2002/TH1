import { StyleSheet, TouchableOpacity, View } from "react-native"
import Bai1Component from "./src/Bai1Component";
import Bai2Component from "./src/Bai2Component";
import Bai3Component from "./src/Bai3Component";
import Bai4Component from "./src/Bai4Component";
import Bai5Component from "./src/Bai5Component";
import Bai6Component from "./src/Bai6Component";
import Bai7Component from "./src/Bai7Component";
import Bai8Component from "./src/Bai8Component";
import Bai1Lab1P2Component from "./src/Bai1Lab1P2Component";
import * as React from 'react';
import { Button, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from "react-native-gesture-handler";
import Bai1Lab1P2V2Component from "./src/Bai1Lab1P2V2Component";



const App = ({navigation}) =>{
  return(
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
    <Text style={{fontSize:18, fontWeight:'bold', marginBottom: 10}}>Nguyễn Trung Tính - 2024802010018</Text>
  </View>
  )
}

const Drawer = createDrawerNavigator();
export default () =>{
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={App} />
      <Drawer.Screen name="Bài 1" component={Bai1Component} />
      <Drawer.Screen name="Bài 2" component={Bai2Component} />
      <Drawer.Screen name="Bài 3" component={Bai3Component} />
      <Drawer.Screen name="Bài 4" component={Bai4Component} />
      <Drawer.Screen name="Bài 5" component={Bai5Component} />
      <Drawer.Screen name="Bài 6" component={Bai6Component} />
      <Drawer.Screen name="Bài 7" component={Bai7Component} />
      <Drawer.Screen name="Bài 8" component={Bai8Component} />
      <Drawer.Screen name="Bài 1 P2" component={Bai1Lab1P2Component} />
      <Drawer.Screen name="Bài 1 P2 Ver2" component={Bai1Lab1P2V2Component} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
};