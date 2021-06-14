import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {FONTS} from '../../Fonts/Fonts'
var { height, width } = Dimensions.get('window')
import {setData} from '../../Helper/StrorageHelper';
import {STORAGE_CONSTANT} from '../../Constant/Constant'
import Button from '../../Component/Button'
const IntroSliderScreen = (props) => {
  useEffect(async () => {
        
    // await setData(STORAGE_CONSTANT.INTROSINGLESLIDER,'1')
  
    });
    const doLogin = () => {
       
      
      //    setData(STORAGE_CONSTANT.INTROMULTISLIDER,'1')
          props.navigation.navigate('LoginScreen');
      }
      const doSignUp = () => {
       
      
        //    setData(STORAGE_CONSTANT.INTROMULTISLIDER,'1')
            props.navigation.navigate('SignUpScreen');
        }
      return   <View style={{flex:1,backgroundColor:'white'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="interactive">
      <View style={{flex:0.7,backgroundColor:'#C4C4C4'}}></View>
      
      <View style={{flex:0.3,backgroundColor:'#FFFFFF'}}>
      <View style={{flex:0.7}}>

          <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:18,textAlign:'center',marginTop:15}}>Title Comes Here</Text>
          <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:14,textAlign:'center',lineHeight:22,margin:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sit amet, consectetur adipiscing elit, sed.</Text>
          </View>
          <View style={{flex:0.3,flexDirection:'row',marginLeft:10}}>
              <View style={{flex:0.1}}></View>
              <View style={{flex:0.4,padding:7}}>
              <Button
          title={'Login'}
          borderColor={'#0087ED'}
          click={doLogin}
          /> 
          </View>
          <View style={{flex:0.4,padding:7}}> 
          <Button 
             click={doSignUp}
             textColor='#FFFFFF'
            //  fontSize={14}
             backgroundColor='#0087ED'
             title={'Signup'}
            />
          
          </View>
        </View>

        
      </View>

</KeyboardAwareScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default IntroSliderScreen;