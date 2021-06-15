import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions, TextInput,TouchableOpacity} from "react-native";
var { height, width } = Dimensions.get('window')

const Button = (props) => {
    
      return    <TouchableOpacity  onPress={()=>props.click()}  style={{ flex: 1,marginRight:width/4, height:props.height|| 44, width:props.width|| 200,backgroundColor:props.backgroundColor||'#FFFFFF' ,borderRadius:30,borderColor:props.borderColor||'#FFFFFF',borderWidth:0.2}}>
      <Text style={{textAlign:'center',marginTop:props.textMarginTop||10,color:props.textColor||'#0087ED',fontSize:props.fontSize||19}}>{props.title}</Text>
   </TouchableOpacity>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default Button;