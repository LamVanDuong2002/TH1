import { StyleSheet, View, Text, TouchableOpacity, Vibration} from "react-native"
import React, { useState } from 'react'
import { Divider } from 'react-native-paper';
import {Entypo} from '@expo/vector-icons'
const Bai1Lab1P2V2Component = () =>{
     const [allowPress, setAllowPress] = useState(true)
     const [currentNumber, setCurrentNumber] = useState('')
     const [lastNumber, setLastNumber] = useState('')
     const [darkMode, setDarkMode] = useState(false)
     const buttonRight = ['/','*','-','+','=']
     const buttonLeft = [
          ['C', 'DEL', '%'],
          ['7','8','9'],
          ['4','5','6'],
          ['1','2','3'],
          ['0','.']
     ]

     function calculator(){
          let lastArr = currentNumber[currentNumber.length - 1]
  
          if(lastArr === '/' || lastArr ==='*' || lastArr ==='-' || lastArr ==='+' || lastArr === '.'){
              setCurrentNumber(currentNumber)
              return
          }
          else{
              let result = eval(currentNumber).toString();
              setCurrentNumber(result)
              return
          }
      }
      function handleInput(buttonPressed)
      {
          if(allowPress == true)
          {
              if(buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/')
              {
                  if(currentNumber.length != 0)
                  {
                      Vibration.vibrate(35)
                      setCurrentNumber(currentNumber + buttonPressed);
                      return
                  }
                  return
               
              } 
              else if(buttonPressed === 0||buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 || buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === '.' )
              {
                  Vibration.vibrate(35)
              }
          }
              switch(buttonPressed){
                  case 'DEL':
                      if(allowPress == true)
                      {
                      Vibration.vibrate(35)
                      setCurrentNumber(currentNumber.substring(0, (currentNumber.length-1)))
                      return
                      }
                      return
                  case '%':
                         if(allowPress == true)
                         {
                         Vibration.vibrate(35)
                         setCurrentNumber(currentNumber/100)
                         return
                         }
                         return
                  case 'C':
                      Vibration.vibrate(35)
                      setLastNumber('')
                      setCurrentNumber('')
                      setAllowPress(true)
                      return
                  case '=':
                      if(allowPress == true)
                      {
                          if(currentNumber.length != 0)
                          {
                              if(currentNumber[1] === '/' && currentNumber[2] == 0)
                              {
                                  Vibration.vibrate(35)
                                  setCurrentNumber('Không thể chia cho 0')
                                  setAllowPress(false)
                                  return
                              }else{
                                  Vibration.vibrate(35)
                                  setLastNumber(currentNumber + "=")
                                  calculator()
                                  return
                              } 
                            
                          }
                        
                      }
                      return
                      
                    
              }
              if(allowPress == true)
              {
                  setCurrentNumber(currentNumber + buttonPressed)
              }
        
        
      }
     const calculatorStyle = StyleSheet.create({
          container:{
               backgroundColor: darkMode ? 'black' : 'white',
               flex:1,
          },
          resultContainer:{
               backgroundColor: darkMode ? 'black' : 'white',
               flex:2,
               justifyContent:'flex-end',
          },
          buttonContainer:{
               marginTop:10,
               flex:1.8,
               flexDirection:'row'
          },
          buttonRightSide:{
               flex:1,
          },
          buttonLeftSide:{
               flex:3,
               flexDirection:'column'
          },
          touchPad:{
               backgroundColor: darkMode ? 'black' : 'white',
               flex:1,
               justifyContent:'center',
               alignItems:'center',
               
          },
          touchPadTextOrange:{
               fontSize:32,
               fontWeight: 'bold',
               color:'orange',  
          }
          ,
          touchPadTextBlack:{
               color: darkMode ? 'white' : 'black',
               fontSize:32,
               fontWeight: 'bold',
          },
          divider:{
               backgroundColor:'gray',
               margin:15
               
          },
          modeButton:{
               backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
               borderRadius: 25,
               marginLeft:20,
               width: 50,
               height: 50,
               alignSelf:'flex-start',
               bottom: '55%',
               alignItems : 'center',
               justifyContent: 'center',
          },
          lastResult:{
               color: darkMode ? '#B5B7BB' : '#7c7c7c',
               fontSize: 32,
               marginRight: 20, 
               marginBottom:3,
               alignSelf:'flex-end'
          },
          currentResult:{
               color: darkMode ? 'white' : 'black',
               fontSize: 32,
               marginRight: 20, 
               marginBottom:10,
               alignSelf:'flex-end'
          }
     
     })
     return(
          <View style={calculatorStyle.container}>
               <View style={calculatorStyle.resultContainer}>
                    <TouchableOpacity style={calculatorStyle.modeButton} onPress={() => setDarkMode(!darkMode)}>
                         <Entypo name={darkMode ? 'light-up' : 'moon'} size={30} color={darkMode ? 'white': 'black'} onPress={() => setDarkMode(!darkMode)}/>
                    </TouchableOpacity>
                    <Text style={calculatorStyle.lastResult}>{lastNumber}</Text>
                    <Text style={calculatorStyle.currentResult}>{currentNumber}</Text>
               </View>
               <Divider style={calculatorStyle.divider}/>
               <View style={calculatorStyle.buttonContainer}>
                    <View style={calculatorStyle.buttonLeftSide}>
                         {
                              buttonLeft.map((position, index)=>
                              <View key={position} style={{flex:1,flexDirection:'row'}}>
                                   {
                                        position.map(text =>
                                        <TouchableOpacity key={text} style={calculatorStyle.touchPad}  onPress={() => handleInput(text)}>
                                             {
                                                  (index == 0) ?
                                                  <Text style={calculatorStyle.touchPadTextOrange}>{text}</Text>
                                                  :
                                                  <Text style={calculatorStyle.touchPadTextBlack}>{text}</Text>
                                             }
                                        </TouchableOpacity>
                                  
                                       )
                                   }
                                  
                              </View>
          
                              )
                         }
                    </View>
                    <View style={calculatorStyle.buttonRightSide}>
                         {
                              buttonRight.map(text=>
                                   <TouchableOpacity key={text} style={calculatorStyle.touchPad} onPress={() => handleInput(text)}>
                                        <Text style={calculatorStyle.touchPadTextOrange}>{text}</Text>
                                   </TouchableOpacity>
                              )
                         }
                    </View>
               </View>
          </View>
     )
    
}

export default Bai1Lab1P2V2Component