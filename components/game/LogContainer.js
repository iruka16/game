import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors";


function LogContainer({children}){
return(
<View style = {styles.Container}>
    <Text style = {styles.insideText}>GUESSES:</Text>
    <Text style = {styles.insideText}>{children}</Text>

</View>)
}

export default LogContainer;

const styles = StyleSheet.create({
Container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: 22,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary800,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: .50,
        shadowRadius: 6,
        elevation: 4,
    },
insideText: {
        fontSize: 22,
        color: Colors.accent500,
        fontWeight: 'bold',
       
    }




})


