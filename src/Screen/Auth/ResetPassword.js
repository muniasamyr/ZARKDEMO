import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput ,Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {FONTS} from '../../Fonts/Fonts'
var { height, width } = Dimensions.get('window')
const ResetPasswordScreen = (props) => {
    
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="interactive">
      <View style={{flex:0.2}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:30,marginTop:15,marginLeft:20}}>Reset Password</Text> 
      </View>
 
      <View style={{flex:0.5,backgroundColor:'#FFFFFF',margin:15,borderRadius:10}}>
     
      <TextInput
      label="New Password"
      mode="outlined"
      outlineColor='red'
      style={{margin:20}}
    //   value={text}
    
    />
      <TextInput
      label="Confirm Password"
      mode="outlined"
      outlineColor='red'
      style={{margin:20}}
    //   value={text}
    
    />
     
   
        
      </View>

</KeyboardAwareScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ResetPasswordScreen;