/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { StyleSheet, ImageBackground, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';



export default class Splash extends Component{
  constructor(props){
    super(props);
  }//Constructor End.

  componentDidMount(){
    setTimeout(()=>{
          this.props.navigation.navigate('Login');
    },3000);
  }

  render(){
    return(
      <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
        <Image source={require('src/Assets/Images/logo.png')} style={{width: 200, height:120}} />
      </View>
    )
  }
}//End of Splash component.
