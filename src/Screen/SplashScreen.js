import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,ImageBackground,Alert} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CodePush from 'react-native-code-push';
var { height, width } = Dimensions.get('window');
import {getData} from '../Helper/StrorageHelper';
import {STORAGE_CONSTANT} from '../Constant/Constant'
import {SpalshStyles} from '../StyleSheet/SplashStyle'
const SplashScreen = (props) => {
  const  styles=SpalshStyles();
    const switch_status=true
    useEffect(async() => {
      syncImmediate() 
     let introSlider= await getData(STORAGE_CONSTANT.INTROSINGLESLIDER)||null;
     let introMultiSlider=await getData(STORAGE_CONSTANT.INTROMULTISLIDER)||null
     let loged_in=await getData(STORAGE_CONSTANT.LOGED_IN)||null
     
     if(introMultiSlider===null){
      props.navigation.navigate('IntroMultisliderScreen');
     }else if(introSlider===null){
      props.navigation.navigate('IntroSliderScreen');
     }else if(loged_in===null){
      props.navigation.navigate('LoginScreen');
     }else{
      props.navigation.navigate('HomeScreen');
     }
    
      });
      const syncImmediate=()=> {
        CodePush.sync(
          { installMode: CodePush.InstallMode.ON_NEXT_RESTART, updateDialog: true },
          codePushStatusDidChange.bind(this),
        );
      }
    
      const Restart=() =>{
        CodePush.restartApp();
      }
      const codePushStatusDidChange=(syncStatus) =>{
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log('CHECKING_FOR_UPDATE');
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log('DOWNLOADING_PACKAGE');
    
            break;
          case CodePush.SyncStatus.AWAITING_USER_ACTION:
            console.log('AWAITING_USER_ACTION');
    
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            console.log('INSTALLING_UPDATE');
    
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            console.log('UP_TO_DATE');
    
            break;
          case CodePush.SyncStatus.UPDATE_IGNORED:
            console.log('UPDATE_IGNORED');
    
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            console.log('UPDATE_INSTALLED');
    
            Alert.alert(
              '',
              'Update successfully installed, please restart now',
              [{ text: 'Restart', onPress: () => this.Restart() }],
              { cancelable: false },
            );
            break;
    
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            console.log('UNKNOWN_ERROR');
            break;
        }
      }
      
      return   <View style={styles.container}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="interactive">
       <ImageBackground 
       source={require('../Image/SplashScreen.png')}
       style={styles.image}
       ></ImageBackground>

</KeyboardAwareScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SplashScreen;