import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppIntroSlider from 'react-native-app-intro-slider';
import { FONTS } from '../../Fonts/Fonts'
import { INTROMULTISLIDERDATA } from '../../Constant/StaticData'
import { setData } from '../../Helper/StrorageHelper';
import { STORAGE_CONSTANT } from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
import Button from '../../Component/Button'

const IntroMultisliderScreen = (props) => {
  const _renderItem = ({ item, index }) => {

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.15 }} />
        <View style={{ flex: 0.45, flexDirection: 'row' }}>
        {index===0? <View style={styles.rightSideStyle1}></View>:
          <View style={styles.rightSideStyle}></View>}
          <View style={{ flex: 0.05, flexDirection: 'column' }}></View>
          <View style={styles.imageView}>
            <View style={{ flex: 0.3 }}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={require('../../Image/Group.png')}
              />
            </View>
            <View style={{ flex: 0.7 }}>

              <Text style={styles.title}>Title Comes Here</Text>
              <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sit amet, consectetur adipiscing elit, sed.</Text>
            </View>
          </View>

          <View style={{ flex: 0.05, flexDirection: 'column' }}></View>
          {index===INTROMULTISLIDERDATA.length-1?null:
          <View style={styles.leftSideStyle}></View>}
        </View>
      </View>
    );
  }


  const _onDone = () => {
       setData(STORAGE_CONSTANT.INTROMULTISLIDER,'1')
    props.navigation.navigate('IntroSliderScreen');
  }

  const rendbut = () => {

    return (
     
      <Button
        click={_onDone}
        width={120}
        title={'Skip'}
      />
    

    )
  }

  const renddonebut = () => {
    return (
      <Button
        title={'Done'}
        width={120}
        click={_onDone}
      />
    )
  }

  return <View style={styles.container}>
    <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }} keyboardDismissMode="interactive">
      <AppIntroSlider
        renderItem={_renderItem}
        data={INTROMULTISLIDERDATA}
        renderNextButton={rendbut}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDot}
        onDone={() => _onDone}
        bottomButton={false}
        renderDoneButton={renddonebut}
      />
    </KeyboardAwareScrollView>
  </View>;
};

const styles = StyleSheet.create({
  text: {fontSize: 30},
  container:{ flex: 1, backgroundColor: '#0087ED' },
  title:{ fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 30 },
  activeDot:{ width: 25, height: 7, backgroundColor: '#fff', marginBottom: 400 },
  dotStyle:{ backgroundColor: '#a6a6a6', marginBottom: 400 },
  rightSideStyle:{ flex: 0.05, flexDirection: 'column', backgroundColor: '#03cffc', borderTopRightRadius: 40, borderBottomRightRadius: 40 },
  rightSideStyle1:{ flex: 0.05, flexDirection: 'column', backgroundColor: '#0087ED', borderTopRightRadius: 40, borderBottomRightRadius: 40 },
  content:{ fontFamily: FONTS.PROXIMA_NOVA, fontSize: 14, opacity: 0.6, textAlign: 'center', lineHeight: 22, margin: 10, marginTop: 20 },
  image:{ height: 80, width: 80, alignSelf: 'center', marginTop: 30 },
  imageView:{ flex: 0.8, backgroundColor: '#FFFFFF', borderRadius: 20, flexDirection: 'column' },
  leftSideStyle:{ flex: 0.05, flexDirection: 'column', backgroundColor: '#03cffc', borderTopLeftRadius: 40, borderBottomLeftRadius: 40 }
});

export default IntroMultisliderScreen;