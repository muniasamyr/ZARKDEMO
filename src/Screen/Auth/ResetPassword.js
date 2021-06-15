import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput ,Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {FONTS} from '../../Fonts/Fonts'
var { height, width } = Dimensions.get('window')
import Button from '../../Component/Button'
import {EMAIl,PASSWORD_LENGTH} from '../../Constant/Constant'
const ResetPasswordScreen = (props) => {
  const [newPwd,setNewPwd] = useState('');
  const [confirmPwd,setConfirmPwd] = useState('');
  const [hideNewPassword,setHideNewPassword]=useState(true);
  const [hideConfirmPassword,setHideConfirmPassword]=useState(true);
  const [msgForNewPwd,setMsgForNewPwd] = useState(false);
  const [msgForConfirmPwd,setMsgForConfirmPwd] = useState(false);
  const _onDone = () => {
       if(newPwd!==confirmPwd){
        setPasswordErrorMsg(true)
        return true
       }
    props.navigation.navigate('HomeScreen')   
    
 }
 const setNewPwdFunction=(pwd)=>{
  let storePwd=pwd.trim();
 
  if(storePwd.length>PASSWORD_LENGTH){
    setMsgForNewPwd(true)
  }else{
    setMsgForNewPwd(false)
  }
  setNewPwd(storePwd)
}
const setConfirmPwdFunction=(pwd)=>{
  let storePwd=pwd.trim();
 
  if(storePwd===newPwd){
    setMsgForConfirmPwd(true)
  }else{
    setMsgForConfirmPwd(false)
  }
  setConfirmPwd(storePwd)
}
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="interactive">
      <View style={{flex:0.2}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:30,marginTop:15,marginLeft:20}}>Reset Password</Text> 
      </View>
 
      <View style={{flex:0.1,backgroundColor:'#FFFFFF',margin:15,borderRadius:20,elevation:1}}>
     
      <View style={styles.passwordContainer}>
   
   <TextInput
 label="Password"
 mode="outlined"

 value={newPwd}
 style={styles.inputStyle}
 secureTextEntry={hideNewPassword}
 outlineColor='#757575'
 right={<TextInput.Icon size={20} name="eye" color={hideNewPassword===true?"#CCCCCC":'#0087ED'} onPress={()=>setHideNewPassword(!hideNewPassword)}/>}
 onChangeText={pwd => setNewPwdFunction(pwd)}



/>


</View>
{msgForNewPwd==true?
    <View style={{flex:0.01,marginLeft:20,marginTop:-10}}>
            <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:12,color:'#00B21D'}}>Strong Password</Text> 
    </View>:null}
<View style={styles.passwordContainer}>
   
   <TextInput
 label="Password"
 mode="outlined"

 value={confirmPwd}
 style={styles.inputStyle}
 secureTextEntry={hideConfirmPassword}
 outlineColor='#757575'
 right={<TextInput.Icon size={20} name="eye" color={hideConfirmPassword===true?"#CCCCCC":'#0087ED'} onPress={()=>setHideConfirmPassword(!hideConfirmPassword)}/>}
 onChangeText={pwd => setConfirmPwdFunction(pwd)}



/>


</View>
{msgForConfirmPwd==true?
    <View style={{flex:0.01,marginLeft:20,marginTop:-10}}>
            <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:12,color:'#00B21D'}}>Password Matched</Text> 
    </View>:null}
      </View>
      <View style={{flex:0.1}}/>
      <View style={{flex:0.02,alignSelf:'center',marginLeft:width/3}}>
      <Button 
             click={_onDone}
             textColor='#FFFFFF'
             fontSize={14}
             height={44}
             width={120}
             backgroundColor='#0087ED'
             title={'Submit'}
            /> 
              
      </View> 

</KeyboardAwareScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  passwordContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    height: 55,
    // borderBottomWidth: 0.6,
    // fontFamily: '',
    // borderBottomColor: '#000',
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    
    // paddingLeft: 10,
    // paddingRight: 5,
    // marginLeft: 5,
    // fontFamily: Fonts.Regular,
    // fontSize: 14,
    // color: colors.CommonColorBB
    // fontWeight: 'normal',
    // fontStyle: 'normal'
  },
});

export default ResetPasswordScreen;