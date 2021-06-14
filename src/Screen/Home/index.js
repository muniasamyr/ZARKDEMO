import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,TouchableOpacity,ImageBackground,FlatList,Image,ScrollView} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HomeCard from '../../Component/HomeCard'
import { FONTS } from "../../Fonts/Fonts";
import {HOME_TABS} from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
import { ProgressBar } from 'react-native-paper';
import Button from '../../Component/Button'
import FirstCard from '../../Component/FirstCard'
const HomeScreen = (props) => {
const _onDone=()=>{

}
const type=HOME_TABS.COMPLETE;
    const tab_data=[{tab_name:'invites',is_open:0},{tab_name:'Upcoming',is_open:0},{tab_name:'Completed',is_open:1}]
   const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => filter(item, index)} style={{ height: 50, marginLeft: 25, marginRight: 25, justifyContent: 'center', alignSelf: 'center',alignItems:'center' }}>
  
                <Text style={{  fontSize: 15,opacity:item.is_open == 0 ? 0.6:1,borderBottomWidth:3,borderBottomColor:item.is_open == 0 ? '#fff' : '#0087ED',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderBottomStartRadius:5,borderBottomEndRadius:5}}>{item.tab_name}</Text>
                
                {/* <View style={{margin:-10,marginTop:-40,justifyContent: 'flex-start', alignSelf: 'flex-start' }} >
                 <Dot name='minus' size={100} color={item.is_open == 0 ? '#fff' : '#0087ED'} ></Dot>  
                 </View> */}
            </TouchableOpacity>
        );
    }
    const renderItem1 = ({ item, index }) => {
      return (
        <FirstCard
        type={type}
        tab_data={tab_data}
        /> 
      );
  }
  const renderItem2 = ({ item, index }) => {
    return (
      <HomeCard></HomeCard> 
    );
}
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
<ScrollView>
       <View style={{ flex:0.1 ,backgroundColor:'#FFFFFF',elevation:3 }}>

<FlatList
    // ref={flatListRef => this.flatListRef = flatListRef}
    horizontal
    contentContainerStyle={{ flexGrow: 1 }}
  
    data={tab_data}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
>

</FlatList>

</View>

    <FirstCard
        type={type}
        tab_data={tab_data}
        /> 
<FlatList 
    contentContainerStyle={{ flexGrow: 1 }}
    data={tab_data}
    renderItem={renderItem2}
    keyExtractor={(item, index) => index.toString()}
></FlatList>
   




</ScrollView>
</View> ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;