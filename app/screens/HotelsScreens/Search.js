import React, { Component } from 'react';
import { Container, Content, Text, Card, CardItem,View } from 'native-base';
export default class app extends Component {
  render() {
    return (
      <Container>
        <Content style = {{backgroundColor: '#d0d0d0'}} >
          <Card>
            <CardItem>
              <View style = {{ flexDirection: 'row' }}>
                
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}