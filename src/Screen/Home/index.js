import React ,{ useState, useEffect } from "react";
import { Text, StyleSheet ,View,Dimensions,TouchableOpacity,ImageBackground,FlatList,Image,ScrollView} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HomeCard from '../../Component/HomeCard'
import { FONTS } from "../../Fonts/Fonts";
import {HOME_TABS} from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
import { ProgressBar } from 'react-native-paper';
import Button from '../../Component/Button'
import FirstCard from '../../Component/FirstCard';
import {getHomeData} from '../../Providers/Home/actions'
import Dot from 'react-native-vector-icons/Feather';
const HomeScreen = (props) => {
  const tab_datas=[{tab_name:'invites',is_open:0,type:HOME_TABS.INVITIES},{tab_name:'Upcoming',is_open:0,type:HOME_TABS.UPCOMING},{tab_name:'Completed',is_open:0,type:HOME_TABS.COMPLETE}]
  const [tab_data,setTab_Data] = useState(tab_datas);
  const [type,setType] = useState(HOME_TABS.INVITIES);
  // const [type,setType] = useState(HOME_TABS.INVITIES);
const _onDone=()=>{

}
const filter=async (item,index)=>{
  await setType(item.tab_name)
 
}
// useEffect(async() => {
//   getHomeData()
// }      
// )
   

 
   const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => filter(item, index)} style={{ height: 50, marginLeft: 25, marginRight: 25, justifyContent: 'center', alignSelf: 'center',alignItems:'center' ,elevation:3}}>
  
                <Text style={{ marginTop:25, fontSize: 15,opacity:item.tab_name !== type ? 0.6:1,borderBottomWidth:3,borderBottomColor:item.tab_name !== type ? '#fff' : '#0087ED',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderBottomStartRadius:5,borderBottomEndRadius:5}}>{item.tab_name}</Text>
                
                {/* <View style={{justifyContent: 'flex-start', alignSelf: 'flex-start' }} >
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
      <HomeCard
      type={type}
      ></HomeCard> 
    );
}
      return   <View style={{flex:1,backgroundColor:'#E5E5E5'}}>
<ScrollView style={{flex:1}}>
       <View style={{ flex:0.1 ,backgroundColor:'#FFFFFF',elevation:3 }}>

<FlatList
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
             <Text style={{  fontSize: 18,marginLeft:20,marginTop:15}}>{type===HOME_TABS.INVITIES?'Public':type===HOME_TABS.UPCOMING?'Accepted Challenges':type===HOME_TABS.COMPLETE?'Results':''}</Text>
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