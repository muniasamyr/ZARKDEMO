import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput ,Checkbox} from 'react-native-paper';
import Button from '../../Component/Button'
import {FONTS} from '../../Fonts/Fonts'
import {STORAGE_CONSTANT} from '../../Constant/Constant'
import {setData} from '../../Helper/StrorageHelper'
import {EMAIl,PASSWORD_LENGTH,PASSWORD} from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
const LoginScreen = (props) => {
  const [pwd,setPwd] = useState('');
  const [userEntry,setUserEntry] = useState('');
  const [hidePassword,setHidePassword]=useState(true);
  const [passwordErrorMsg,setPasswordErrorMsg] = useState(false);
  const [ErrorMsg,setErrorMsg] = useState(false);
  const _onDone = () => {
    if(userEntry===''&&pwd===''){
      setErrorMsg(true)
       return true 
    }else{
      setErrorMsg(false)
      
    }
       if(PASSWORD!==pwd){
    
        setPasswordErrorMsg(true)
         return true
      
        
       }
       setData(STORAGE_CONSTANT.LOGED_IN,'1')
    props.navigation.navigate('HomeScreen')   
    
 }
 const setPwdFunction=(pwd)=>{
  let storePwd=pwd.trim();
 
  
 setPwd(storePwd)
}
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="none">
       <View style={{flex:0.1}}></View>
      <View style={{flex:0.1,marginLeft:10}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:28,marginTop:15,marginLeft:20}}>Welcome Back!</Text> 
      </View>
      
      <View style={{flex:0.4,backgroundColor:'#FFFFFF',margin:15,borderRadius:20}}>
    
        <TextInput
      label="Email or Username"
      mode="outlined"
      outlineColor='#757575'
      selectionColor='red'
      style={{margin:20}}
    //   value={text}
    onChangeText={text => setUserEntry(text.trim())}
    
    />
   <View style={styles.passwordContainer}>
   
   <TextInput
 label="Password"
 mode="outlined"

 value={pwd}
 style={styles.inputStyle}
 secureTextEntry={hidePassword}
 theme={{ colors: { placeholder:passwordErrorMsg===true? 'red':'#757575'} }}
 outlineColor={passwordErrorMsg===true?'red':'#757575'}
 right={<TextInput.Icon size={20} name="eye" color={hidePassword===true?"#CCCCCC":'#0087ED'} onPress={()=>setHidePassword(!hidePassword)}/>}
 onChangeText={pwd => setPwdFunction(pwd)}



/>


</View>
{passwordErrorMsg==true?
    <View style={{flex:0.01,marginLeft:20,marginTop:-10}}>
            <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:12,color:'#F01E18'}}>Incorrect Password</Text> 
    </View>:null}
     
    <Text style={{textAlign:'right',marginRight:30}}onPress={()=>props.navigation.navigate('ForgotPasswordScreen')}>Forgot Password?</Text>
    {ErrorMsg==true?
    <View style={{flex:0.01,marginLeft:20,marginTop:10}}>
            <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:12,color:'#F01E18'}}>Kindly fill all the field</Text> 
    </View>:null} 
      </View>
      <View style={{flex:0.1}}></View>
      <View style={{flex:0.02,alignSelf:'center',marginLeft:width/3}}>
      <Button 
             click={_onDone}
             textColor='#FFFFFF'
             fontSize={14}
             width={120}
             backgroundColor='#0087ED'
             title={'Login'}
            /> 
              
      </View>
      <View style={{flex:0.1,marginTop:10}}>
  
               <Text style={{textAlign:'center',color:'#0087ED',fontWeight:'bold',marginLeft:20}}onPress={()=>props.navigation.navigate('SignUpScreen')}>Signup</Text>
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

export default LoginScreen;