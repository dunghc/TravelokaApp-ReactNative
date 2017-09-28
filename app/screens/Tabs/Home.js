import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, View, Icon, Header, Left, H3, Body, Right, Button, Title, FooterTab } from 'native-base';
import Swiper from 'react-native-swiper';

export default class Home extends Component {

  static navigatorStyle = {
    navBarBackgroundColor: '#75a8f9',
    navBarHidden:true
  };
  
  handlePrees(){
    this.props.navigator.push({
      screen: 'screens.Hotels',
      title: 'Search Hotels',
    })
  }
  ads = [
    {
      promo : require('../../img/promo1.jpg')
    },
    {
      promo : require('../../img/promo2.jpg')
    },
    {
      promo : require('../../img/promo3.jpg')
    },
    {
      promo : require('../../img/promo4.jpg')
    }
  ]
  adsRow(obj){
    return (
      <Card key = {obj.promo} style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
        <TouchableOpacity  >
                <Image 
                  style = {{ width: 140, height:100 }}
                  source = {obj.promo} 
                />       
        </TouchableOpacity>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        
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

        <Content style = {{ backgroundColor: '#d0d0d0' }} >
          <Swiper style = {{height:130}} autoplay>
            <View style = {{ justifyContent:'center', alignItems:'center' }} >
              <Image source={require('../../img/iklan1.jpg')} style={{ width:400, height: 130 }} />
            </View>
            <View style = {{ justifyContent:'center', alignItems:'center' }} >
              <Image source={require('../../img/iklan2.jpg')} style={{ width:400, height: 130 }} />
            </View>
            <View style = {{ justifyContent:'center', alignItems:'center' }} >
              <Image source={require('../../img/iklan3.jpg')} style={{ width:400, height: 130 }} />
            </View>
          </Swiper>
          <FooterTab>    
            <Button 
            full
            style = {{ flexDirection:'row', backgroundColor: '#fff' }}>
              <Image 
                style = {{ width: 35, height:35 }}
                source = {require('../../img/account.png')} 
              />
              <Text>Login or Register</Text>
            </Button>

            <Button 
            full
            style = {{ flexDirection:'row', backgroundColor: '#fff' }}>
              <Image 
                style = {{ width: 35, height:35 }}
                source = {require('../../img/lock.png')} 
              />
              <Text>My Points</Text>
            </Button>
          </FooterTab>  
          <View style ={{ alignItems:'center', flexDirection:'row', marginTop:4, marginLeft:5, marginRight:5}} >

            <Card style = {{ width:100, height:100, justifyContent:'center', alignItems: 'center' }} >
              <TouchableOpacity >
                  <View style = {{ flexDirection: 'column' }} >
                    <View 
                      style = {{ width:70, height:70, backgroundColor:'#7ab7f4', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                      <Image 
                        style = {{ width: 35, height:35 }}
                        source = {require('../../img/plane.png')} 
                      />
                    </View>
                  <Text style = {{ justifyContent:'center'}} >     Flights</Text>
                </View>                  
              </TouchableOpacity>
            </Card>
            
            <Card style = {{ width:100, height:100, justifyContent:'center', alignItems: 'center' }} >
              <TouchableOpacity >
                  <View style = {{ flexDirection: 'column' }} >
                    <View 
                      style = {{ width:70, height:70, backgroundColor:'#f48f42', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                      <Image 
                        style = {{ width: 35, height:35 }}
                        source = {require('../../img/train.png')} 
                      />
                    </View>
                  <Text style = {{ justifyContent:'center'}} >     Hotels</Text>
                </View>                  
              </TouchableOpacity>
            </Card>

            <Card style = {{ width:100, height:100, justifyContent:'center', alignItems: 'center' }} >
              <TouchableOpacity 
                onPress = { () => this.handlePrees() } >
                  <View style = {{ flexDirection: 'column' }} >
                    <View 
                      style = {{ width:70, height:70, backgroundColor:'darkblue', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                      <Image 
                        style = {{ width: 35, height:35 }}
                        source = {require('../../img/hotel.png')} 
                      />
                    </View>
                  <Text style = {{ justifyContent:'center'}} >     Hotels</Text>
                </View>               
              </TouchableOpacity>
            </Card>
            
          </View>

          <View style ={{ alignItems:'center', flexDirection:'row', marginLeft:5, marginRight:5 }} >

            <Card style = {{ width:100, height:100, justifyContent:'center', alignItems: 'center' }} >
              <TouchableOpacity >
                  <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center'  }} >
                    <View 
                      style = {{ width:60, height:60, backgroundColor:'purple', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                      <Image 
                        style = {{ width: 35, height:35 }}
                        source = {require('../../img/hotelfly.png')} 
                      />
                    </View>
                  <Text style = {{ justifyContent:'center', alignItems: 'center' }} >Flight + Hotels</Text>
                </View>                 
              </TouchableOpacity>
            </Card>
            
            <Card style = {{ width:100, height:100, justifyContent:'center', alignItems: 'center' }} >
              <TouchableOpacity >
                  <View style = {{ flexDirection: 'column' }} >
                    <View 
                      style = {{ width:70, height:70, backgroundColor:'pink', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                      <Image 
                        style = {{ width: 35, height:35 }}
                        source = {require('../../img/data.png')} 
                      />
                    </View>
                  <Text style = {{ justifyContent:'center'}} >Top Up Data</Text>
                </View>              
              </TouchableOpacity>
            </Card>

            <Card style = {{ width:100, height:100, justifyContent:'center', alignItems: 'center' }} >
              <TouchableOpacity>
                  <View style = {{ flexDirection: 'column' }} >
                    <View 
                      style = {{ width:70, height:70, backgroundColor:'green', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                      <Image 
                        style = {{ width: 35, height:35 }}
                        source = {require('../../img/activities.png')} 
                      />
                    </View>
                  <Text style = {{ justifyContent:'center'}} >Activities</Text>
                </View>                 
              </TouchableOpacity>
            </Card>
            
          </View>
          <H3 style ={{ marginTop:20 }} > Highlighted Features </H3>

          <View style = {{ flexDirection:'row' }} >
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled={true}
                bounces={false}
                scrollsToTop={false}>

              <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} >
                        <View 
                          style = {{ width:60, height:60, backgroundColor:'pink', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/data.png')} 
                          />
                        </View>
                      <Text style = {{ justifyContent:'center'}} >International Data Plans</Text>
                    </View>          
                  </TouchableOpacity>
                </Card>

                <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'#f48f42', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/train.png')} 
                          />
                        </View>
                      <Text style = {{ justifyContent:'center'}} >Airport Train</Text>
                    </View>               
                  </TouchableOpacity>
                </Card>

                <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'skyblue', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/plane.png')} 
                          />
                        </View>
                      <Text style = {{ justifyContent:'center'}} >International Flights</Text>
                    </View>             
                  </TouchableOpacity>
                </Card>

                <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'darkblue', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/hotel.png')} 
                          />
                        </View>
                        
                      <Text style = {{ justifyContent:'center'}} >International Hotels</Text>
                    </View>               
                  </TouchableOpacity>
                </Card>
              </ScrollView>              
            </View>
            
            <H3 style ={{ marginTop:20 }} >Travel for Less </H3>

            <View style = {{ flexDirection:'row' }} >
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled={true}
                bounces={false}
                scrollsToTop={false}>

              <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'#f48f42', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/persen.png')} 
                          />
                        </View>
                      <Text style = {{ justifyContent:'center'}} >Ongoing Promo</Text>
                    </View>                
                  </TouchableOpacity>
                </Card>

                <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'skyblue', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/alert.png')} 
                          />
                        </View>
                      <Text style = {{ justifyContent:'center'}} >Price Alerts</Text>
                    </View>                 
                  </TouchableOpacity>
                </Card>

                <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'darkblue', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/hotel.png')} 
                          />
                        </View>
                      <Text style = {{ justifyContent:'center'}} >Budget Rooms</Text>
                    </View>          
                  </TouchableOpacity>
                </Card>

                <Card style = {{ width:140, height:100, justifyContent:'center', alignItems: 'center' }} >
                  <TouchableOpacity>
                      <View style = {{ flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} >
                        <View 
                          style = {{ width:70, height:70, backgroundColor:'darkblue', borderRadius:50, justifyContent:'center', alignItems: 'center' }}>
                          <Image 
                            style = {{ width: 35, height:35 }}
                            source = {require('../../img/hotel.png')} 
                          />
                        </View>
                        
                      <Text style = {{ justifyContent:'center'}} >Last-Minute Hotels</Text>
                    </View>          
                  </TouchableOpacity>
                </Card>
              </ScrollView>              
            </View>

            <H3 style ={{ marginTop:20 }} >Flight + Hotels Packages Special Prices</H3>

            <View style = {{ flexDirection:'row', marginBottom:30 }} >
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled={true}
                bounces={false}
                scrollsToTop={false}>

                {this.ads.map((promo) => this.adsRow(promo))}
              
              </ScrollView>              
            </View>

        </Content>
      </Container>
    );
  }
}