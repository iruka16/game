import { View, Text, StyleSheet, Alert, SafeAreaView, Platform } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from "../components/ui/PrimaryButton";
import LogContainer from "../components/game/LogContainer";



function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum == exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxBound = 100
let minBound = 1
let iteration = 1

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameOver, setGameOver] = useState(true)


 useEffect(() => {
  iteration = iteration + 1
  
 }), [currentGuess]

 useEffect(() => {
    if(currentGuess == userNumber){
        onGameOver();
    }
 }, [userNumber, currentGuess, gameOver])

  function nextGeneratedHandler(direction){
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)){
         Alert.alert(
            'LIAR!!!',
            'IF YOU ARE JUSTICE PLS DO NOT LIE',
            [{text: 'sorry', style: 'cancel'}]
        );
        return;
    };
    if (direction === 'lower'){
        maxBound = currentGuess

    }else{
        minBound = currentGuess + 1 

    }
    const newRndNum =  generateRandomNumber(minBound, maxBound, currentGuess)
    setCurrentGuess(newRndNum);


  }

  return (
    <View style={styles.screen}>
        <SafeAreaView>
            <Title>OPPPONENT'S GUESS</Title>
     </SafeAreaView>
     
     
        <NumberContainer>{currentGuess}</NumberContainer>
        
      <View>
       
        <View style= {styles.buttonLayout}>
        <PrimaryButton onPress={nextGeneratedHandler.bind(this, 'lower')}>
            -
        </PrimaryButton>
        <PrimaryButton onPress={nextGeneratedHandler.bind(this, 'higher')}>
            +
        </PrimaryButton>
        </View> 
      </View>
      <View>
      <LogContainer>{iteration}</LogContainer>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 130,
    padding: 24,
    ...Platform.select({
        android: {
            marginTop: 165


        }
    })
  },
  buttonLayout: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default GameScreen;
