import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
export default class app extends Component {
  render() {
    return (
      <Container>
        <Content style = {{backgroundColor: '#d0d0d0'}} >
          <Text>Duration Page</Text>
        </Content>
      </Container>
    );
  }
}