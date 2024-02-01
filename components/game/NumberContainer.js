import { View , Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function NumberContainer({children}){
    return(
        <LinearGradient colors={[Colors.primary500,"purple"]}style = {styles.container} >
        <View>
            <Text style= {styles.TEXT}>IS IT?</Text>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
        </LinearGradient>
    )
}   

export default NumberContainer;

const styles = StyleSheet.create({
    TEXT: {
        fontSize: 23,
        color: Colors.accent500,
        marginTop: 0,
        marginBottom: 9,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    container:{
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
    numberText:
    {
        textAlign: 'center',
        fontSize: 36,
        color: Colors.accent500,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 5

    }
    



})