import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right,
  Body, 
  Icon, 
  Text,
  CardItem,
  H3
} from 'native-base';

export default class Hotels extends Component {

  static navigatorStyle = {
    navBarBackgroundColor: '#75a8f9',
    tabBarHidden:true,
  };

  handleDestination(){
    this.props.navigator.push({
      screen: 'screens.Destination',
      title: 'Search Destination',
    })
  }

  handleCheckin(){
    this.props.navigator.push({
      screen: 'screens.Chekin',
      title: 'Search Checkin',
    })
  }

  handleGuest(){
    this.props.navigator.push({
      screen: 'screens.Guest',
      title: 'Search Guest',
    })
  }

  handleDuration(){
    this.props.navigator.push({
      screen: 'screens.Duration',
      title: 'Search Duration',
    })
  }

  handleRoom(){
    this.props.navigator.showModal({
      screen: "screens.Room", // unique ID registered with Navigation.registerScreen
      title: "Modal", // title of the screen as appears in the nav bar (optional)
      passProps: {}, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  }

  handleFilter(){
    this.props.navigator.push({
      screen: 'screens.Filter',
      title: 'Search Filter',
    })
  }

  render() {
    return (
      <Container>
        <Content >
          <ScrollView>
          <TouchableOpacity onPress = {() => this.handleDestination()} >
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 18, height:30 }}
                   source = {require('../img/destination.png')} 
                />
                <Body>
                  <Text note>Destination</Text>
                  <H3>Hotels Near You</H3>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleCheckin()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/check-in.png')} 
                />
                <Body>
                  <Text note>Check-In Date</Text>
                  <Text >Wednesday, 20 Sep 2017</Text>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleDuration()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 27, height:30 }}
                   source = {require('../img/duration.png')} 
                />
                <Body>
                  <Text note>Duration</Text>
                  <Text >Check-out: Thursday,21 Sep 2017</Text>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleGuest()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/guest.png')} 
                />
                <Body>
                  <Text note>Total Guest(s)</Text>
                  <Text >1 guest(s)</Text>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleRoom()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/room.png')} 
                />
                <Body>
                  <Text note>Room(s)</Text>
                  <Text >1 room(s)</Text>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.handleFilter()}>
            <CardItem>
              <Left>
                <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/filter.png')} 
                />
                <Body>
                  <Text note>Price & Stars Filter</Text>
                  <Text>No preference</Text>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>
          <View style = {{paddingLeft:20, paddingTop:18, flexDirection:'row'}} >
            <Button 
              onPress = {() => this.handleButtonOnPress() }
              warning
              style = {{ width: 260, justifyContent: 'center' }}
            >
              <Text> Search </Text>
            </Button>
            <Button 
              onPress = {() => this.handleButtonLocation() }
              style = {{ marginLeft:20 ,width: 50, borderRadius:50, justifyContent: 'center' }}
            >
            <Image 
                  style = {{ width: 25, height:30 }}
                   source = {require('../img/map.png')} 
                />
            </Button>
          </View>
          </ScrollView>
          
        </Content>
      </Container>
    );
  }
  handleButtonOnPress(){
    this.props.navigator.push({
      screen: 'screens.Search',
      title: 'Searching...',
    })
  }
  handleButtonLocation(){
    this.props.navigator.push({
      screen: 'screens.Location',
      title: 'Search Location',
    })
  }
}