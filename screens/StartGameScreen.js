import{TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';




function StartGameScreen(){
    return (
        <View style ={styles.inputContainer}>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>confirm</PrimaryButton>


        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        padding: 16,
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
        fontSize: 32, 
    }
  
});
