/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet,StatusBar, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';

/*-----------------------------------------------------------------
* Stylesheet                                                       |
*-----------------------------------------------------------------*/
import Style from './RegisterStyle';

/*-----------------------------------------------------------------
* Form Component                                                  |
*-----------------------------------------------------------------*/
import RegisterForm from './RegisterForm';

export default class Register extends Component{
  constructor(props){
    super(props);


    this.goBack = this.goBack.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.registerUser = this.registerUser.bind(this);    
  }//Constructor

  goBack(){
    this.props.navigation.pop();
  }

  handleRegister(credentials){

    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(credentials.email, credentials.password).then( response => {
      
      let registerData = {
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
        firebase_id: response.user.uid
      } 

        fetch('http://platinum-web.azurewebsites.net/api/addUserApp', {method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({        
            email: credentials.email,
            name: credentials.name,
            password: credentials.password,
            firebase_id: response.user.uid})
        })

      });

      this.props.navigation.pop();

  }

  registerUser(credentials){

    fetch('http://platinum-web.azurewebsites.net/api/addUserApp', {method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return (responseJson);
      
      console.log(responseJson)
    })
  }

  render(){
    return(
      <Container>
        <StatusBar hidden={true}/>
        <Header style={Style.header}>
          <Left>
            <TouchableWithoutFeedback onPress={this.goBack}>
              <View style={{marginTop: 20, marginLeft: 20}}>
                <Icon name="angle-left" color={'#000'} size={40} />
              </View>
            </TouchableWithoutFeedback>
          </Left>
          <Body>

          </Body>
          <Right>

          </Right>
        </Header>
        <Content contentContainerStyle={Style.container}>
          <Text style={Style.headerText}>
            REGISTRATE
          </Text>
          <RegisterForm  handleRegister={this.handleRegister}/>
        </Content>
      </Container>
    )
  }//Render function.

}// Register component.
