import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput ,Checkbox} from 'react-native-paper';
import Button from '../../Component/Button'
import {FONTS} from '../../Fonts/Fonts'
var { height, width } = Dimensions.get('window')
const LoginScreen = (props) => {
  const _onDone = () => {
       
    props.navigation.navigate('ForgotPasswordScreen')   
    
 }
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="none">
       <View style={{flex:0.1}}></View>
      <View style={{flex:0.1,marginLeft:10}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:28,marginTop:15,marginLeft:20}}>Welcome Back!</Text> 
      </View>
      
      <View style={{flex:0.45,backgroundColor:'#FFFFFF',margin:15,borderRadius:10}}>
    
        <TextInput
      label="Email or Username"
      mode="outlined"
      outlineColor='#757575'
      selectionColor='red'
      style={{margin:20}}
    //   value={text}
    
    />
        <TextInput
      label="Password"
      mode="outlined"
      outlineColor='#757575'
      style={{margin:20}}
    //   value={text}
    
    />
    <Text style={{textAlign:'right',marginRight:30}}onPress={()=>props.navigation.navigate('ForgotPasswordScreen')}>Forgot Password?</Text>
        
      </View>
      <View style={{flex:0.1}}></View>
      <View style={{flex:0.07,alignSelf:'center',marginLeft:width/4}}>
      <Button 
             click={_onDone}
             textColor='#FFFFFF'
             fontSize={14}
             backgroundColor='#0087ED'
             title={'Login'}
            /> 
              
      </View>
      <View style={{flex:0.1,marginTop:10}}>
  
               <Text style={{textAlign:'center',color:'#0087ED',fontWeight:'bold'}}onPress={()=>props.navigation.navigate('ForgotPasswordScreen')}>Signup</Text>
      </View>

</KeyboardAwareScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LoginScreen;