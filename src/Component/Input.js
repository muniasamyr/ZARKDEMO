import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions, TextInput} from "react-native";
var { height, width } = Dimensions.get('window')
const Input = (props) => {
    
      return   <TextInput style={{flex:0.4,marginTop: 5,borderRadius:10,borderWidth: 1,backgroundColor:"#284a54",color:'white'}} placeholder=' username or email' placeholderTextColor='white'  />

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default Input;