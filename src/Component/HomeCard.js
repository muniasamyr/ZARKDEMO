
import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,TouchableOpacity,ImageBackground,FlatList,Image} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Dot from 'react-native-vector-icons/Feather';
import { ProgressBar } from 'react-native-paper';
import {FONTS} from '../Fonts/Fonts'
const HomeCard = (props) => {
   const tab_data=[1,2,3] 
      return    <View style={{flex:0.2,margin:15,backgroundColor:'#FFFFFF',borderRadius:10}}>
        <View style={{flex:0.5,flexDirection:'row'}}>
          <View style={{flex:0.6,flexDirection:'column'}}>
            <Text style={{fontSize:14,fontWeight:'700',fontFamily:FONTS.PROXIMA_NOVA,marginLeft:10}}>Jack challenged 6 players to DOTA.</Text>

          </View>
          <View style={{flex:0.4,flexDirection:'column'}}>
           <View style={{flex:0.4,flexDirection:'row',alignSelf:'flex-end'}}>
           <AntDesign name='close' style={{ fontSize: 18, color: '#000', marginLeft:10}} />
           </View>
           <View style={{flex:0.4,flexDirection:'row',alignSelf:'center'}}>
           <Text style={{fontSize:14,fontFamily:FONTS.PROXIMA_NOVA,marginLeft:10}}>30/6</Text>
           </View>
           <View style={{flex:0.3,flexDirection:'row',marginTop:3}}>
           <Image
                source={require('../Image/CreditSymbol.png')}
                style={{marginLeft:20}}
                ></Image>
                <ProgressBar progress={0.3} style={{height:13,width:62,borderRadius:10,backgroundColor:'#DADADA',marginLeft:10}} color={'#0087ED'} />
           </View>
          </View>

        </View>

<View style={{flex:0.65,flexDirection:'row',marginTop:10}}>
<ImageBackground source={require('../Image/1.jpg')} style={{ height: 140, width: '100%', }}
              imageStyle={{ opacity: 0.8, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

              <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text style={{ color: '#fff', fontSize: 12 }}>Sponsored</Text>
                </View>
                <View style={{ width: '50%' }}>
                  <View style={{ alignItems: 'flex-end', }}>
                    <Text style={{ color: '#fff', fontSize: 14 }}>3 Slots left</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, position: 'absolute', bottom: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text style={{ color: '#fff', fontSize: 14 }}>Starts in 6 hours on Play Station</Text>
                </View>
                <FlatList
                     data={tab_data}
                     contentContainerStyle={{marginLeft:5}}
                     horizontal={true}
                     keyExtractor={(item, index) => index.toString()}
                     renderItem={({ item, index }) =>
                   
      
                  
                       <Image
                       source={require('../Image/1.jpg')}
                        style={{width: 18 , height: 18 ,alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor: '#fff',borderRadius: 30,marginRight:index!==tab_data.length-1?-10:0}} />
                    
      
                     }/>
                
                <View style={{ width: '50%' }}>
                  <View style={{ alignItems: 'flex-end', }}>
                    <Text style={{ color: '#fff', fontSize: 14 }}>10 Credits</Text>
                   
                    <TouchableOpacity style={{ paddingHorizontal: 10, backgroundColor: '#0087ED', borderRadius: 20, paddingVertical: 2,marginTop:5 }}>
                      <Text style={{ color: '#fff' }}>Accept</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
              </View>
              
            </ImageBackground>
</View>
      </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeCard;