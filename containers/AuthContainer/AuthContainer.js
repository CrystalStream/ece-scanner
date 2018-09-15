import React, { Component } from 'react'
import { 
  Container,
  Content,
  Footer,
  Button,
  Card,
  CardItem,
  Body,
  Text,
  View,
  Form,
  Item,
  Input
} from 'native-base';
import { Image } from 'react-native';
import Logo from '../../assets/udglogo.png';

const styles = {
  authLogoContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    borderBottomColor: '#1A9968',
  },
  authLogo: {
    height: 80,
    width: '100%'
  },
  authContainer: {
    marginTop: 100,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginHorizontal: 20,
    backgroundColor: '#1A9968'
  },
  formHeader: {
    color: 'white'
  },
  formItem: {
    marginVertical: 15,
  }
}

export default class AuthContainer extends Component {
  
  navigateToHome = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <Container>
      <Content>
        <View style={styles.authLogoContainer}>
          <Image source={Logo} style={styles.authLogo}/>
        </View>
        <View style={styles.authContainer}>
          <Text style={styles.formHeader}>Iniciar Sesion</Text>
          <Form>
            <Item style={styles.formItem}>
              <Input placeholder="Nombre de usario" />
            </Item>
            <Item style={styles.formItem}>
              <Input placeholder="Contraseña" />
            </Item>
          </Form>
        </View>
      </Content>
      <Footer>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Universidad de Guadalajara &copy;</Text>
        </View>
      </Footer>
    </Container>
    )
  }
}