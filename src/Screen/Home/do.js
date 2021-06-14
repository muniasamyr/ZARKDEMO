import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, AsyncStorage, FlatList, Text, ImageBackground } from 'react-native';
import { Card, ListItem, Button, Icon, Row, Col, Avatar } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Card containerStyle={{ borderRadius: 10, padding: 0 }} >
          <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
            <View style={{ width: '80%' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, fontFamily: 'opensans-bold', lineHeight: 20 }}>Jack challenged 6 players to DOTA</Text>
            </View>
            <View style={{ width: '20%' }}>
              <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                <AntDesign name='close' style={{ fontSize: 20, color: '#000' }} />
              </View>
            </View>
          </View>
          <Card.Divider />
          <View style={{ height: 200, width: '100%', marginTop: -15, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <ImageBackground source={require('../../../assets/images/example.jpeg')} style={{ height: 200, width: '100%', }}
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
                <View style={{ width: '50%' }}>
                  <View style={{ alignItems: 'flex-end', }}>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>3 Slots left</Text>
                   
                    <TouchableOpacity style={{ paddingHorizontal: 10, backgroundColor: 'blue', borderRadius: 20, paddingVertical: 2 }}>
                      <Text style={{ color: '#fff' }}>Accept</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

        </Card>

      </View>


    )
  }

}


export default Home