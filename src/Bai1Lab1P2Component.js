import {Entypo} from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Vibration, View , Text} from 'react-native'

const Bai1Lab1P2Component = () =>{

    const [darkMode, setDarkMode] = useState(false)
    const [allowPress, setAllowPress] = useState(true)
    const [currentNumber, setCurrentNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')

    const buttons = ['C', 'DEL', '/', 7, 8, 9, '*',4 ,5 ,6, '-', 1, 2, 3, '+', 0, '.', '=']


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
                                setLastNumber(currentNumber + '=')
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
    const styles = StyleSheet.create({
        results: {
            backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
            maxWidth: '100%',
            minHeight: '35%',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        },
        resultText: {
            maxHeight: 45,
            color: '#00b9d6',
            margin: 15,
            fontSize: 35,
        },
        historyText: {
            color: darkMode ? '#B5B7BB' : '#7c7c7c',
            fontSize: 20,
            marginRight: 10, 
            alignSelf: 'flex-end',
        },
        themeButton: {
            alignSelf: 'flex-start',
            bottom: '5%',
            margin: 15,
            backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
            alignItems : 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        buttons: {
            width: '100%',
            height: '35%',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        button: {
            borderColor: darkMode ? '#3f4f5b' : '#e5e5e5',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '24%',
            minHeight: '54%',
            flex: 2,
        },
        textButton: {
            color: darkMode ? '#B5B7BB' : '#7c7c7c',
            fontSize: 28,
        }
    })
    return(
        <View>
            <View style={styles.results}>
                <TouchableOpacity style={styles.themeButton} onPress={() => setDarkMode(!darkMode)}>
                    <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white': 'black'} onPress={() => setDarkMode(!darkMode)}/>
                </TouchableOpacity>
                <Text style={styles.historyText}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>
            <View style={styles.buttons}>
                {buttons.map((button) => 
                    button === '=' || button === '+' || button === '-' || button === '*' || button === '/'  ?
                    <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#00b9d6'}]} onPress={() => handleInput(button)}>
                        <Text style={[styles.textButton, {color: 'white', fontSize: 28}]}>{button}</Text>
                    </TouchableOpacity>
                    :
                    button === '.' || button ==='DEL' ? 
                    <TouchableOpacity key ={button} style={[styles.button, {backgroundColor: button === '.' ? darkMode ? '#303946': '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth:'37%'}]}
                    onPress={() => handleInput(button)}>
                        <Text style={styles.textButton}>{button}</Text>
                    </TouchableOpacity>
                    :
                    button === 'C' || button === 0?
                    <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ?
                    darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%'}]}
                    onPress={() => handleInput(button)}>
                        <Text style={styles.textButton}>{button}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? 
                    darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed'}]}
                    onPress={() => handleInput(button)}>
                        <Text style={styles.textButton}>{button}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
    
}

export default Bai1Lab1P2Component