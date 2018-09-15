import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class HomeContainer extends Component {

  navigateToAuth = () => {
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <Container>
      <Content>
        <Text>
          Here should be the home
        </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full onPress={this.navigateToAuth}>
            <Text>To auth</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    )
  }
}