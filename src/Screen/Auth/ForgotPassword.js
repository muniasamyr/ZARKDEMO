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
  const [email,setEmail] = useState('');
  const [isError,setIsError] = useState(false);
  const _onDone = () => {
       if(email===''){
        setIsError(true)
        return
       }
   
    props.navigation.navigate('ResetPasswordScreen')  
  }
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow:1}} keyboardDismissMode="interactive">
      <View style={{flex:0.1}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:28,marginTop:15,marginLeft:20}}>Forgot Password</Text> 
      </View>
 
      <View style={{flex:0.1,backgroundColor:'#FFFFFF',margin:15,marginTop:-5,borderRadius:20,elevation:3}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:14,lineHeight:22,margin:15}}> Please enter the email Id to recover the password</Text>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:16,lineHeight:22,margin:15,marginTop:-5,opacity:0.3}}>We will email you a link to reset your password</Text>
      <TextInput
      label="Email"
      mode="outlined"
      outlineColor='#757575'
      onChangeText={text => setEmail(text.trim())}
      style={{margin:15,marginTop:-2}}
    //   value={text}
    
    />
     {isError==true?
    <View style={{flex:0.01,marginLeft:20,marginTop:10}}>
            <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:12,color:'#F01E18'}}>Kindly fill  the Email</Text> 
    </View>:null} 
   
        
      </View>
      <View style={{flex:0.02,alignSelf:'center',marginLeft:width/6,marginTop:20}}>
      <Button 
             click={_onDone}
             textColor='#FFFFFF'
             fontSize={14}
             width={120}
             backgroundColor='#0087ED'
             title={'send'}
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