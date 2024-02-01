import{TextInput, View, StyleSheet, Alert, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import { useState } from 'react';
import Title from '../components/ui/Title';

function StartGameScreen({onPickNumber}){
 const [enteredNumber,setEnteredNumber] = useState('')

 function numberInputHandler(enteredText){
    setEnteredNumber(enteredText)

 }
 function restInputHandler(){
    setEnteredNumber('')
 }
 function confirmInputHandler(){
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99){
        Alert.alert(
            'Invalid Number',
            'Number has to be a numberbetween  1 and 99.',
            [{text: 'Okay', style: 'destructive', onPress: restInputHandler}]
            );
            return;

    }
    onPickNumber(chooseNumber);
}
    return (
        <View style = {styles.overallContainer}>
        <Title style= {styles.test}>GUESS MY NUMBER</Title>
   <View style ={styles.inputContainer}>
            <Text style= {styles.text} >NUMBER HERE:</Text>
            <TextInput
             style = {styles.Textinput} 
             maxLength={2}
             keyboardType='number-pad'
             autoCapitalize='none'
             autoCorrect={false}
             value = {enteredNumber}
             onChangeText={numberInputHandler}
             />
             <View style ={styles.buttonHolder}>
            <PrimaryButton onPress={restInputHandler}>Reset</PrimaryButton>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>


        </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    overallContainer: {
        
        flex: 1,
        marginTop: 120,
        alignItems: 'center'

    },
    text:{
        color: Colors.accent500,
        fontSize: 23

    },
    inputContainer: {
        backgroundColor: Colors.primary800,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 18,
        marginTop: 40,
        borderRadius: 8,
        elevation: 4,
        borderWidth: 3,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: .25,
        shadowRadius: 6, 
        borderColor: Colors.accent500

    },
    Textinput: {
        height: 50,
        width: 50,
        fontSize: 32, 
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonHolder: {
        flexDirection: 'row',
      
        justifyContent: 'center'
    }

  
});
