import {View, Text, Pressable, StyleSheet} from 'react-native'


function PrimaryButton({children}){
    function pressHandler(){
        console.log("pressed!")
    }

     return(
        <View style ={styles.outerContainer}>
        <Pressable style ={({pressed}) => pressed ?
        [styles.container, styles.pressed]: styles.container} 
        onPress = {pressHandler}>
        
            <Text style = {styles.buttonText}>{children}</Text>
        
        </Pressable>
        </View>
     )
}

export default PrimaryButton; 

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 5,
        overflow: 'hidden'
    },
container: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 10,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: .25,
    shadowRadius: 6,
    
},
buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'

},
 pressed: {
    opacity: 0.75
 }


})