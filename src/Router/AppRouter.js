import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createTabNavigator, TabNavigator, SafeAreaView, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SplashScreen from '../Screen/SplashScreen'
import SignUpScreen from '../Screen/Auth/SignUp'
import LoginScreen from '../Screen/Auth/Login'
import ForgotPasswordScreen from '../Screen/Auth/ForgotPassword'
import ResetPasswordScreen from '../Screen/Auth/ResetPassword'
import { Dimensions, View, Image, Text, Platform, Alert } from 'react-native';
import IntroSliderScreen from '../Screen/IntroSlider/IntroSlider'
import IntroMultisliderScreen from '../Screen/IntroSlider/IntroMultiSlider'
import HomeScreen from '../Screen/Home/index'
import { createDrawerNavigator } from 'react-navigation-drawer';

import Header from './Header'
import { FONTS } from '../Fonts/Fonts';
// const DrawerScreens = createDrawerNavigator(
//   {
//     // MainTab: MainTab// Tabs

    


//   },

//   {
//     // contentComponent: DynamicDrawer,
//     drawerWidth: (Dimensions.get('window').width * 3) / 4,
//   },
// );
class NavigationTab extends Component {



  render() {
    return (
      <Image style={{ tintColor: this.props.focused = undefined || this.props.focused ? '#0087ED' : '#DADADA' }} source={this.props.source}
      />
    );
  }
}
const HomeStack = createStackNavigator({
  // DrawerScreens: {
  //   screen: DrawerScreens,
  //   navigationOptions: () => {
  //     return {
  //       headerShown: false,
  //     };
  //   },
  // },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  

});
const SplashStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  IntroMultisliderScreen: {
    screen: IntroMultisliderScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  IntroSliderScreen: {
    screen: IntroSliderScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },


});
const AuthStack = createStackNavigator({
  
  
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  ForgotPasswordScreen: {
    screen: ForgotPasswordScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={0} />
      };
    },
  },
  
  ResetPasswordScreen: {
    screen: ResetPasswordScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={0} />
      };
    },
  },
  

});
// const MainTab = createBottomTabNavigator({
//   HomeScreen: HomeScreen,

 
//   Ho:  HomeScreen,

//   Ho: HomeScreen,
  
  
// }, {
//   defaultNavigationOptions: ({ navigation, focused }) => ({
//     tabBarOnPress: ({ navigation, defaultHandler }) => {
    
//       let route = navigation.state.routeName;
//       if (route == "Home") {
//         navigation.navigate('Home');
//       }  else {
//         navigation.navigate(route)

//       }


//       // defaultHandler()
//     },

//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let TabIcon;
//       if (routeName === 'Home') {
//         TabIcon = require('../Image/Home.png');
//       } else  if (routeName === 'Ho') {
//         TabIcon = require('../Image/Create_Inactive.png');
//       }else  if (routeName === 'Hom') {
//         TabIcon = require('../Image/Profile.png');
//       }
//       return <NavigationTab focused={focused} source={TabIcon}
//       />
//     },
//     tabBarLabel: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let TabIcon;
//       // if (routeName === 'Home') {
//       //   TabIcon = 'Home';
//       // } 
//       return (
//         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ textAlign: 'center', color: focused == undefined || focused ? '#0087ED' :'#DADADA', fontFamily: FONTS.PROXIMA_NOVA, fontSize: 12 }}>{TabIcon}</Text>
//         </View>)

//     },
//     tabBarOptions: {
//       activeTintColor: '#0087ED',
//       inactiveTintColor: '#DADADA'
//     },
//   }),


// });

const AppRouter = createSwitchNavigator(

  {
   
    // "IntroSliderScreen":IntroSliderScreen,
    // "IntroMultisliderScreen":IntroMultisliderScreen,
    // "LoginScreen":LoginScreen,
    // "SignUpScreen":SignUpScreen,
    // "SplashScreen":SplashScreen,
    // "HomeScreen":HomeScreen,
    home:HomeStack,
   
    "initial":SplashStack ,
     auth:AuthStack
    
  },
  {
    initialRouteName: 'initial',
  },

);

export default createAppContainer(AppRouter);
