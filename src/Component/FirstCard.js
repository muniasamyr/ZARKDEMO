import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,TouchableOpacity,ImageBackground,FlatList,Image} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
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


      <View style={{flex:0.4,marginLeft:10,marginRight:5,marginTop:10,borderRadius:20,backgroundColor:'#FFFFFF',flexDirection:'row',elevation:3,width:width-50}}>
                <View style={{flex:0.4,flexDirection:'column'}}>
      <ImageBackground source={require('../Image/1.jpg')} style={{ height: "100%", width: '100%' }}
                imageStyle={{ opacity: 0.8, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderTopLeftRadius:10,borderTopRightRadius:10 }}>
      
                <View style={{ flex:props.type===HOME_TABS.UPCOMING?0.2:0.7,flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
             
                    <Text style={{ color: '#fff', fontSize: 12 ,fontWeight:'400',fontFamily:FONTS.PROXIMA_NOVA}}>3 Slots left</Text>
                  </View>
                  {props.type===HOME_TABS.UPCOMING?
                   <View style={{ flex:0.5,flexDirection: 'row',marginTop:-15 }}>
                  <Entypo name='message' style={{ fontSize: 20, color: '#fff', marginLeft:8}} />
                  </View>:null}
                 
                    <View style={{ flex:0.3,alignSelf:'flex-end',marginHorizontal:10,marginRight:20 }}>
                      <Text style={{ color: '#fff', fontSize: 12 }} numberOfLines={2}>Starts in 6 hours on PS4</Text>
                    </View>
                  
              
               
              
                
              </ImageBackground>
              </View>
              <View style={{flex:0.6,flexDirection:'column'}}>
              <View style={{flex:0.35,flexDirection:'row',}}>
              <Text style={{ color:'#000', fontSize: 14,fontWeight:'700',marginHorizontal:20,marginTop:10}} numberOfLines={2}>Jack challenged 6 players to DOTA</Text>
              
              {/* {props.type===HOME_TABS.INVITIES?
              <View style={{flex:0.4,flexDirection:'column',alignSelf:'flex-end'}}>
           <AntDesign name='close' style={{ fontSize: 18, color: '#000', marginLeft:10}} />
           </View>:null} */}
              </View>
              <View style={{flex:0.2,flexDirection:'row',marginTop:5}}>
              <Image
                source={require('../Image/CreditSymbol.png')}
                style={{marginLeft:20}}
                ></Image>
                <ProgressBar progress={0.3} style={{height:13,width:62,borderRadius:10,backgroundColor:'#DADADA',marginLeft:10}} color={'#0087ED'} />
                <Text style={{ color:'#000', fontSize: 12,fontWeight:'400',marginLeft:10}} numberOfLines={2}>30/60</Text>
              </View>
              {
              props.type===HOME_TABS.INVITIES||props.type===HOME_TABS.COMPLETE?
              <View style={{flex:0.15,flexDirection:'row',marginLeft:15,marginTop:5}}>
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
              </View>:<View style={{flex:0.2,flexDirection:'row',marginLeft:20}}>
        
                     
                              <Text style={{ color:'#000', fontSize: 14,fontWeight:'400',lineHeight:15}} numberOfLines={2}>A challenge to take 100 kills.</Text>
                              
              </View>}
              {
              props.type===HOME_TABS.INVITIES?
              <View style={{flex:0.1,flexDirection:'row',marginLeft:10,}}>
              <View style={{flex:0.6,flexDirection:'column',margin:10}}>
              <Button 
                   click={_onDone}
                   textColor='#FFFFFF'
                   fontSize={14}
                   width={91}
                  height={30}
                  textMarginTop={4}
                   backgroundColor='#0087ED'
                   title={'Accept'}
                  /> 
              </View>
              <View style={{flex:0.5,flexDirection:'column'}}>
              <Text style={{ color:'#000', fontSize: 14,fontWeight:'700',marginTop:15}} numberOfLines={1}>10 Credits</Text>
              </View>
              </View>:props.type===HOME_TABS.UPCOMING?
                <View style={{flex:0.15,flexDirection:'row',marginLeft:15,marginTop:5}}>
                <View style={{flex:0.25,flexDirection:'row',height:25}}>
                {props.tab_data.map(ele=>{return <Image source={require('../Image/1.jpg')}
                        style={{width: 18 , height: 18 ,alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor: '#fff',borderRadius: 30,marginRight:index!==props.tab_data.length-1?-10:0,flexDirection:'row'}} />
                    
      
                    })}
                      {/* <FlatList
                             data={props.tab_data}
                             contentContainerStyle={{marginLeft:5}}
                             horizontal={true}
                             renderItem={({ item, index }) =>
                           
              
                          
                               <Image
                               source={require('../Image/1.jpg')}
                                style={{width: 18 , height: 18 ,alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor: '#fff',borderRadius: 30,marginRight:index!==props.tab_data.length-1?-10:0}} />
                            
              
                             }/> */}
                             </View> 
                             <View style={{flex:0.75,flexDirection:'column'}}>
                                      <Text style={{ color:'#000', fontSize: 10,fontWeight:'400'}} numberOfLines={1}>Mike +2 others joined</Text>
                                      </View>
                      </View>:<View style={{flex:0.35,flexDirection:'row',marginLeft:15,}}>
              
                      <View style={{flex:0.4,flexDirection:'column',margin:5,marginVertical:10}}>
              <Button 
                   click={_onDone}
                   textColor='#FFFFFF'
                   fontSize={14}
                   width={102}
                   height={30}
                   textMarginTop={4}
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
      
      
      
      


    );
}
      return       <View style={{flex:0.4 }}>  
      <Text style={{  fontSize: 15,marginLeft:20,marginTop:15}}>{props.type===HOME_TABS.INVITIES?'Private':props.type===HOME_TABS.UPCOMING?'My Challenges':props.type===HOME_TABS.COMPLETE?'Pending':''}</Text>
      
      <FlatList
     horizontal={true}
    contentContainerStyle={{flexGrow:1}}
    data={[1,2,3]}
    renderItem={renderItem1}
    keyExtractor={(item, index) => index.toString()}
/>
</View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default FirstCard;


// <View style={{flex:1,flexDirection:'row',width:width-40,backgroundColor:'red',margin:10}}>
// <View style={{flex:0.5,flexDirection:'column'}}>
//                                  {/* <Image
//                                       style={{height:100,width:100,borderRadius:55,alignSelf:'center',marginTop:10}}
//                                           resizeMode={'center'}
//                                           source={require('../image/female.jpg')}
//                                       /> */}
                                    

// </View>
// <View style={{flex:0.5,flexDirection:'column'}}>
//     <Text style={{marginTop: 5,marginLeft:5,textDecorationColor:'grey'}}>kayal </Text> 
//     <Text style={{marginTop: 5,marginLeft:5}}>27 yrs old </Text> 
//     <Text style={{marginTop: 5,marginLeft:5}}>D/o karthick</Text> 
//     <Text style={{marginTop: 5,marginLeft:5}}>vedapatti</Text> 
    
// </View>
    
// </View>   



