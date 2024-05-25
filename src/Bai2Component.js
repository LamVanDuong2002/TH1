import { Button, StyleSheet, Text, TouchableHighlight, View } from "react-native"
const Bai2Component = () => {
    return(
        <View style={bai2Style.container}>
            <Button title="CLICK ME !!!" onPress={()=>alert('Nguyen Trung Tinh')}></Button>
            <TouchableHighlight style={bai2Style.buttonStyle}>
                <Text style={bai2Style.txtStyle} onPress={()=>alert('2024802010018')}>TOUCH ME !!!</Text>
            </TouchableHighlight>
        </View>  
    )
}
export default Bai2Component;
var bai2Style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        },
        txtStyle:{
            fontWeight:'bold',
            textAlign:'center',
            color:'black',
        
        },
        buttonStyle:{
            backgroundColor:'lightgrey',
            height:50,
            width:150,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth:1,
            borderColor:'royalblue',
            borderRadius:10,
            marginTop:20
        }
    }
)