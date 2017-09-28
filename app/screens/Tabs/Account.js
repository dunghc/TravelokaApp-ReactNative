import React, { Component } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { Container, Content, View, Icon, Header, Left, Body, Right, Button } from 'native-base';


export default class Home extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#75a8f9',
    navBarHidden:true
  };
    render() {
        return (

        <Header style = {{ backgroundColor:'#7ab7f4' }} >
          <Left>
            <Button 
              onPress = {() => this.props.navigator.toggleDrawer({
              side: 'left',
              animated: true
              })} 
              transparent>

              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Image 
              style = {{ width: 100, height:50 }}
              source = {require('../../img/traveloka.png')} 
            />
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
     );
  }
}