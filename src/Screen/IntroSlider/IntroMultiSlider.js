import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,Image,TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppIntroSlider from 'react-native-app-intro-slider';
import {FONTS} from '../../Fonts/Fonts'
import {INTROMULTISLIDERDATA} from '../../Constant/StaticData'
import {setData} from '../../Helper/StrorageHelper';
import {STORAGE_CONSTANT} from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
import Button  from '../../Component/Button'

const IntroMultisliderScreen = (props) => {
 const   _renderItem = ({ item, index }) => {

        return (
            <View style={{flex:1}}>
            <View style={{flex:0.15}}/>
    
         
            <View style={{flex:0.45,flexDirection:'row'}}>
           
                       
           
                       <View style={{flex:0.05,flexDirection:'column',backgroundColor:'#03cffc',borderTopRightRadius:40,borderBottomRightRadius:40}}></View>
                       <View style={{flex:0.05,flexDirection:'column'}}></View>
                 <View style={{flex:0.8,backgroundColor:'#FFFFFF',borderRadius:20,flexDirection:'column'}}>
                <View style={{flex:0.3}}>
                <Image
                                                             style={{height:80,width:80,alignSelf:'center',marginTop:30}}
                                                                 resizeMode={'center'}
                                                                 source={require('../../Image/Group.png')}
                                                             />
                </View>
                 <View style={{flex:0.7}}>
           
           <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontWeight:'bold',fontSize:18,textAlign:'center',marginTop:30}}>Title Comes Here</Text>
           <Text style={{fontFamily:FONTS.PROXIMA_NOVA,fontSize:14,opacity:0.6,textAlign:'center',lineHeight:22,margin:10,marginTop:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sit amet, consectetur adipiscing elit, sed.</Text>
           </View>
                 </View>
                
                 <View style={{flex:0.05,flexDirection:'column'}}></View>
                       
           
                 <View style={{flex:0.05,flexDirection:'column',backgroundColor:'#03cffc',borderTopLeftRadius:40,borderBottomLeftRadius:40}}></View>
                 </View>
                 </View>
        );
    }
    
    
     const _onDone = () => {
       
      
    //    setData(STORAGE_CONSTANT.INTROMULTISLIDER,'1')
        props.navigation.navigate('LoginScreen');
    }
    
    const rendbut = () => {
    
        return (
            // <TouchableOpacity onPress={()=>_onDone()} style={{ flex: 1,marginRight:width/4, height: 44, width: 120,backgroundColor:'#FFFFFF' ,borderRadius:30}}>
            //    <Text style={{textAlign:'center',marginTop:10,color:'#0087ED',fontSize:19}}>Skip</Text>
            // </TouchableOpacity>
             <Button 
             click={_onDone}
             title={'Skip'}
            /> 
           
        )
    }
    
  const  renddonebut = () => {
        return (
          <Button
          title={'Done'}
          click={_onDone}
          /> 
        )
    }
    
      return   <View style={{flex:1,backgroundColor:'#0087ED'}}>
       <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="interactive">
       <AppIntroSlider
                    renderItem={_renderItem}
                    data={INTROMULTISLIDERDATA}
                    renderNextButton={rendbut}
                    dotStyle={{
                        backgroundColor: '#a6a6a6',
                        marginBottom: 160
                    }}
                    activeDotStyle={{
                        width:25,
                        height:7,
                        backgroundColor: '#fff',
                        marginBottom: 160
                    }} 
                    onDone={() => _onDone}
                    bottomButton={false}
                    renderDoneButton={renddonebut}
/>
</KeyboardAwareScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default IntroMultisliderScreen;