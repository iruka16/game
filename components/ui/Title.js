import { Text, StyleSheet, SafeAreaView } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
  return(
    <SafeAreaView  style={styles.title}>
  <Text style= {styles.text}>{children}</Text>
  </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  text:{
    fontWeight: 'bold',
    fontSize: 21,
    color: Colors.accent500,
    textAlign: "center"

  },
  title: {
    borderWidth: 3,
    paddingVertical: 19,
    paddingHorizontal: 17,
  
    borderColor:Colors.accent500,
    backgroundColor: Colors.primary500,
    shadowColor: 'black',
    shadowOffset: {width: 19, height: 10},
    shadowOpacity: .25,
    shadowRadius: 8, 
    borderRadius: 8

  },
});

export default Title;
