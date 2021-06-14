import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput ,Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../Component/Button'
import {FONTS} from '../../Fonts/Fonts'
import {EMAIl} from '../../Constant/Constant'

var { height, width } = Dimensions.get('window')
const SignUpScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [emailError,setEmailError] = useState(true);
  const [pwd,setPwd] = useState('');
  const [hidePassword,setHidePassword]=useState(false);
  const _onDone = () => {
       
    props.navigation.navigate('ForgotPasswordScreen')   
    
 }
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow:1 }} keyboardDismissMode="interactive">
       <View style={{flex:0.1}}/>
      <View style={{flex:0.1}}>
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:18,marginTop:10,marginLeft:20}}>Sign Up</Text> 
      <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:18,marginTop:5,marginLeft:20,opacity:0.2}}>to challenge your friends and win loot!
</Text>
      </View>
      <View style={{flex:0.05}}/>
      <View style={{flex:0.1,backgroundColor:'#FFFFFF',marginLeft:15,marginRight:15,borderRadius:20}}>
      <View style={[styles.passwordContainer,{marginTop:40}]}>
      <TextInput
      label="Username"
      mode="outlined"
      style={styles.inputStyle}
      value={userName}
      outlineColor='#757575'
      onChangeText={userName => setUserName(userName.trim())}
      
    //   value={text}
    
    />
    </View>
    <View style={styles.passwordContainer}>
        <TextInput
      label="Email"

      mode="outlined"
      value={email}
      style={styles.inputStyle}
      placeholderTextColor={emailError===true?'red':null}
      outlineColor={emailError===true?'red':'#757575'}
      onChangeText={email => setEmail(email.trim())}
      // style={{margin:20}}
    //   value={text}
    
    />


    </View>
    {emailError===true?
    <View style={{marginLeft:20,marginTop:-10}}>
    <Text styles={{fontSize:8,fontFamily:FONTS.PROXIMA_NOVA,color:'red',fontWeight:'100'}}>Email already exists</Text>
    </View>:null}
    

    <View style={styles.passwordContainer}>
   
        <TextInput
      label="Password"
      mode="outlined"
      value={pwd}
      style={styles.inputStyle}
      secureTextEntry={hidePassword}
      outlineColor='#757575'
      right={<TextInput.Icon name="eye" color="#CCCCCC"/>}
      onChangeText={pwd => setPwd(pwd.trim())}
      // style={{margin:20}}
    //   value={text}
    
  
    />
    {/* <TouchableOpacity   style={{position:'absolute',right:10}} onPress={() =>alert('hi')}>

<Icon
    name="eye"
    onPress={() =>alert('hi')}
    color={hidePassword?'#0087ED':'#E5E5E5'}
    size={22}
/></TouchableOpacity> */}
    </View>
    <View style={{marginLeft:20,flex:0.1,opacity:0.4,justifyContent:'flex-end',marginBottom:10}}>
    <Checkbox
    contentContainerStyle={{borderWidth:0.1,borderColor:'#757575',opacity:0.6}}
status={'unchecked '}
/>
<Text style={{position:'absolute',left:30,bottom:8}}>I certify that I am 13 years or older.</Text>
</View>
      </View>
      <View style={{flex:0.1}}></View>
      <View style={{flex:0.03,alignSelf:'center',marginLeft:width/3}}>
      <Button 
             click={_onDone}
             textColor='#FFFFFF'
             fontSize={14}
             height={44}
             width={120}
             backgroundColor='#0087ED'
             title={'signup'}
            /> 
              
      </View>
      <View style={{flex:0.1,marginTop:10}}>
  
               <Text style={{textAlign:'center',color:'#0087ED',fontWeight:'bold',marginLeft:width/9}}onPress={()=>props.navigation.navigate('ForgotPasswordScreen')}>Login</Text>
      </View>
      <Text style={{marginLeft:20,textAlign:'center',opacity:0.4,fontFamily:FONTS.PROXIMA_NOVA,fontSize:12}}>by clicking “Signup” button you agree to T&C.</Text>
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
    backgroundColor:'#FFFFFF'
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

export default SignUpScreen;