import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions, SafeAreaView, Platform, ImageBackground, TouchableOpacity } from "react-native";
import NotificationIcon from 'react-native-vector-icons/Fontisto'
var { height, width } = Dimensions.get('window')
import { ProgressBar } from 'react-native-paper';
import { FONTS } from '../Fonts/Fonts'
const Header = (props) => {
    const _onDone = () => {



    }
    return <SafeAreaView style={{ height: height / 100 * 9, backgroundColor: '#fff', paddingLeft: 10, paddingVertical: 10, flexDirection: 'row' }}>
        <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 30, fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold' }}>Zark</Text>
        </View>

        <View style={{ flex: 0.6, flexDirection: 'row' }}>
            <View style={{ flex: 0.2, flexDirection: 'column' }}>
                <ImageBackground source={require('../Image/Star.png')} style={{ height: 50, width: 50, }}
                    imageStyle={{ opacity: 0.8, }}>
                    <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', marginTop: 15 }}>12</Text>
                </ImageBackground>
            </View>
            <View style={{ flex: 0.6, flexDirection: 'column' }}>
                <ProgressBar progress={0.3} style={{ height: 15, width: 70, borderRadius: 10, backgroundColor: '#DADADA', marginRight: 10, marginTop: 20,marginLeft:-10 }} color={'#0087ED'} />
            </View>
            <TouchableOpacity
                onPress={() => this.props.navigationProps.navigate('Notification')}
                style={{ flex: 0.1,flexDirection:'column' }}>
                <NotificationIcon name="bell" size={20} color={'#000'} style={{marginTop:10 }} />

                <View style={{ backgroundColor: 'red', height: 18, width: 18, borderRadius: 75, position: 'absolute', top: -1,left:10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 10, fontFamily: FONTS.PROXIMA_NOVA, textAlign: 'center' }} numberOfLines={1}>{'10'}</Text>
                </View>
            </TouchableOpacity>
        </View>


    </SafeAreaView>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default Header;