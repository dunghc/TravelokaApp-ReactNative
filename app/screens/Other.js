import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button,  Left, Right, Body, Icon, Text, CardItem, H3 } from 'native-base';

export default class Hotels extends Component {

  static navigatorStyle = {
    navBarBackgroundColor: '#75a8f9',
    tabBarHidden:true,
  };

  handleHome(){
    this.props.navigator.push({
      screen: 'tabs.Home',
    });
    this.props.navigator.toggleDrawer({
      side: 'left', 
      animated: true, 
      to: 'closed' 
    });
  }

  handleInbox(){
    this.props.navigator.push({
      screen: 'tabs.Inbox',
    });
    this.props.navigator.toggleDrawer({
      side: 'left', 
      animated: true, 
      to: 'closed' 
    });
  }

  handleAccount(){
    this.props.navigator.push({
      screen: 'tabs.Account',
    });
    this.props.navigator.toggleDrawer({
      side: 'left', 
      animated: true, 
      to: 'closed' 
    });
  }

  handleBooking(){
    this.props.navigator.push({
      screen: 'tabs.Booking',
    });
    this.props.navigator.toggleDrawer({
      side: 'left', 
      animated: true, 
      to: 'closed' 
    });
  }

  render() {
    return (
      <Container style = {{ backgroundColor:'#FFF' }} >
        <Content >

          <Image 
            style = {{ width: 270, height:130 }}
            source = {require('../img/traveloka.png')} 
          />

          <TouchableOpacity onPress = {() => this.handleHome()} >
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 18, height:30 }}
                   source = {require('../img/nav.png')} 
                />
                <Body>
                  <Text note>My</Text>
                  <H3>Home</H3>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleInbox()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/nav.png')} 
                />
                <Body>
                  <Text note>My</Text>
                  <H3>Inbox</H3>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleAccount()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 27, height:30 }}
                   source = {require('../img/nav.png')} 
                />
                <Body>
                  <Text note>My</Text>                  
                  <H3>Account </H3>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleBooking()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/nav.png')} 
                />
                <Body>
                  <Text note>My</Text>
                  <H3>Booking</H3>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

        </Content>
      </Container>
    );
  }
}