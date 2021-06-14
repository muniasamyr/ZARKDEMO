import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput ,Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {FONTS} from '../../Fonts/Fonts'
import Button from '../../Component/Button'
var { height, width } = Dimensions.get('window')
const ForgotPasswordScreen = (props) => {
  const _onDone = () => {
       
      
    
  }
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="interactive">
      <View style={{flex:0.1}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:18,marginTop:15,marginLeft:20}}>Forgot Password</Text> 
      </View>
 
      <View style={{flex:0.4,backgroundColor:'#FFFFFF',margin:15,borderRadius:10}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:14,lineHeight:22,margin:15}}> Please enter the email Id to recover the password</Text>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:16,lineHeight:22,margin:15,opacity:0.3}}>We will email you a link to reset your password</Text>
      <TextInput
      label="Email"
      mode="outlined"
      outlineColor='red'
      style={{margin:20}}
    //   value={text}
    
    />
     
   
        
      </View>
      <View style={{flex:0.08,alignSelf:'center',marginLeft:40}}>
      <Button 
             click={_onDone}
             textColor='#FFFFFF'
             fontSize={14}
             backgroundColor='#0087ED'
             title={'Signup'}
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

export default ForgotPasswordScreen;