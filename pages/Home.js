import React, {Component} from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <Container>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content>
        <Text>Home Page</Text>
        <Button onPress={ () => this.props.navigation.push( 'Second' )}>
          <Text>Go Second Page</Text>
        </Button>
      </Content>
    </Container>
  }
}
