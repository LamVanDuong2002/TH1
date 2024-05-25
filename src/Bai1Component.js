import { StyleSheet, Text, View } from "react-native"
const Bai1Component = () => {
    return(
        <View style={bai1Style.container}>
            <Text style={bai1Style.txtStyle}>Hello World !</Text>
        </View>  
    )
}
export default Bai1Component;
var bai1Style = StyleSheet.create(
    {
        container: {
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            backgroundColor: 'navy'
        },
        txtStyle:{
    
            color:'white'
        }
    }
  

)