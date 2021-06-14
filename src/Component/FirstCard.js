import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,TouchableOpacity,ImageBackground,FlatList,Image} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { FONTS } from "../Fonts/Fonts";
import {HOME_TABS} from '../Constant/Constant'
var { height, width } = Dimensions.get('window')
import { ProgressBar } from 'react-native-paper';
import Button from '../Component/Button'
const FirstCard = (props) => {
  const _onDone=()=>{

  }
  const renderItem1 = ({ item, index }) => {
    return (
      <View style={{flex:0.4}}>  
      <Text style={{  fontSize: 15,marginLeft:20,marginTop:15}}>{'Private'}</Text>
      <View style={{flex:0.9,marginLeft:20,marginRight:20,marginTop:10,borderRadius:10,backgroundColor:'#FFFFFF',flexDirection:'row'}}>
      <ImageBackground source={require('../Image/1.jpg')} style={{ height: "100%", width: '100%',flex:0.4,flexDirection:'column' }}
                imageStyle={{ opacity: 0.8, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
      
                <View style={{ flex:0.7,flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
             
                    <Text style={{ color: '#fff', fontSize: 12 ,fontWeight:'400',fontFamily:FONTS.PROXIMA_NOVA}}>3 Slots left</Text>
                  </View>
                 
                    <View style={{ flex:0.3,alignSelf:'flex-end',marginHorizontal:10,marginRight:20 }}>
                      <Text style={{ color: '#fff', fontSize: 12 }} numberOfLines={2}>Starts in 6 hours on PS4</Text>
                    </View>
                  
              
               
              
                
              </ImageBackground>
              <View style={{flex:0.6,flexDirection:'column'}}>
              <View style={{flex:0.35,flexDirection:'row'}}>
              <Text style={{ color:'#000', fontSize: 14,fontWeight:'700',marginHorizontal:20,marginTop:10}} numberOfLines={2}>Jack challenged 6 players to DOTA</Text>
              </View>
              <View style={{flex:0.2,flexDirection:'row'}}>
              <Image
                source={require('../Image/CreditSymbol.png')}
                style={{marginLeft:20}}
                ></Image>
                <ProgressBar progress={0.3} style={{height:13,width:62,borderRadius:10,backgroundColor:'#DADADA',marginLeft:10}} color={'#0087ED'} />
                <Text style={{ color:'#000', fontSize: 12,fontWeight:'400',marginLeft:10}} numberOfLines={2}>30/60</Text>
              </View>
              {
              props.type===HOME_TABS.INVITIES||props.type===HOME_TABS.COMPLETE?
              <View style={{flex:0.15,flexDirection:'row',marginLeft:15}}>
        <View style={{flex:0.25,flexDirection:'row'}}>
              {/* <FlatList
                     data={props.tab_data}
                     contentContainerStyle={{marginLeft:5}}
                     horizontal={true}
                     renderItem={({ item, index }) => */}
                   
      
                  
                       
                      {props.tab_data.map(ele=>{return <Image source={require('../Image/1.jpg')}
                        style={{width: 18 , height: 18 ,alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor: '#fff',borderRadius: 30,marginRight:index!==props.tab_data.length-1?-10:0,flexDirection:'row'}} />
                    
      
                    })}
                     </View> 
                     <View style={{flex:0.75,flexDirection:'column'}}>
                              <Text style={{ color:'#000', fontSize: 10,fontWeight:'400'}} numberOfLines={1}>Mike +2 others joined</Text>
                              </View>
              </View>:<View style={{flex:0.15,flexDirection:'row',marginLeft:20}}>
        
                     
                              <Text style={{ color:'#000', fontSize: 12,fontWeight:'400'}} numberOfLines={1}>A challenge to take 100 kills.</Text>
                              
              </View>}
              {
              props.type===HOME_TABS.INVITIES?
              <View style={{flex:0.35,flexDirection:'row',marginLeft:15,}}>
              <View style={{flex:0.5,flexDirection:'column',margin:10}}>
              <Button 
                   click={_onDone}
                   textColor='#FFFFFF'
                   fontSize={14}
                   width={80}
                   backgroundColor='#0087ED'
                   title={'Accept'}
                  /> 
              </View>
              <View style={{flex:0.5,flexDirection:'column'}}>
              <Text style={{ color:'#000', fontSize: 14,fontWeight:'700',marginTop:15}} numberOfLines={1}>10 Credits</Text>
              </View>
              </View>:props.type===HOME_TABS.UPCOMING?
                <View style={{flex:0.15,flexDirection:'row',marginLeft:15}}>
                <View style={{flex:0.25,flexDirection:'column'}}>
                      <FlatList
                             data={props.tab_data}
                             contentContainerStyle={{marginLeft:5}}
                             horizontal={false}
                             renderItem={({ item, index }) =>
                           
              
                          
                               <Image
                               source={require('../Image/1.jpg')}
                                style={{width: 18 , height: 18 ,alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor: '#fff',borderRadius: 30,marginRight:index!==props.tab_data.length-1?-10:0}} />
                            
              
                             }/>
                             </View> 
                             <View style={{flex:0.75,flexDirection:'column'}}>
                                      <Text style={{ color:'#000', fontSize: 10,fontWeight:'400'}} numberOfLines={1}>Mike +2 others joined</Text>
                                      </View>
                      </View>:<View style={{flex:0.35,flexDirection:'row',marginLeft:15,}}>
              
                      <View style={{flex:0.5,flexDirection:'column',margin:5}}>
              <Button 
                   click={_onDone}
                   textColor='#FFFFFF'
                   fontSize={14}
                   width={102}
                   backgroundColor='#0087ED'
                   title={'Vote now'}
                  /> 
              </View>
              <View style={{flex:0.5,flexDirection:'column'}}>
              {/* <Text style={{ color:'#000', fontSize: 14,fontWeight:'700',marginTop:15}} numberOfLines={1}>10 Credits</Text> */}
              </View>
              </View>}
              </View>
           
      </View>
      
      
      </View>
      

    );
}
      return   <FlatList
    horizontal={true}
    contentContainerStyle={{ flexGrow: 1 }}
  
    data={props.tab_data}
    renderItem={renderItem1}
    keyExtractor={(item, index) => index.toString()}
></FlatList>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default FirstCard;


