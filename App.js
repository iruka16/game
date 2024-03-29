import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';



export default function App() {
  const [userNumber, setUserNumber] = useState();
 const [gameOver, setGameOver] = useState(false);


  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
}
let screen = <StartGameScreen onPickNumber= {pickedNumberHandler}/>

function GameOverHandler(){
  setGameOver(true)
}

if (userNumber){
  screen = <GameScreen userNumber={userNumber} onGameOver= {GameOverHandler} />

}
if (gameOver){
   screen = <GameOverScreen />
}


  return (
   <LinearGradient colors={[Colors.primary800, Colors.accent500]} style = {styles.rootScreen}>
    <ImageBackground source = {require('./assets/background.png')} 
    resizeMode='cover' 
    style ={styles.rootScreen}
    imageStyle={styles.backgroundImage}
    >
  <SafeAreaView style = {styles.rootScreen}>{screen}</SafeAreaView>

  </ImageBackground>
   </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  },
  backgroundImage: {
    opacity: 0.15
  }
  
});
