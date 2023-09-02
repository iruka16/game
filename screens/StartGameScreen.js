import{TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';




function StartGameScreen(){
    return (
        <View style ={styles.inputContainer}>
            <TextInput
             style = {styles.Textinput} 
             maxLength={2}
             keyboardType='number-pad'
             autoCapitalize='none'
             autoCorrect={false}
             />
             <View style ={styles.buttonHolder}>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
            </View>


        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#4e0329',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 18,
        marginTop: 100,
        borderRadius: 8,
        elevation: 4,
        borderWidth: 3,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: .25,
        shadowRadius: 6 

    },
    Textinput: {
        height: 50,
        width: 50,
        fontSize: 32, 
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color:'#ddb52f',
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonHolder: {
        flexDirection: 'row',
      
        justifyContent: 'center'
    }

  
});
