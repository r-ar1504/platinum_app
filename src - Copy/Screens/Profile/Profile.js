/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Footer, Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { BackHandler, StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileForm from './ProfileForm';
import firebase from 'react-native-firebase'

/*-----------------------------------------------------------------
* Stylesheet                                                       |
*-----------------------------------------------------------------*/
import Style from './ProfileStyle';

export default class Profile extends Component{
  constructor(props){
    super(props);

    this.state = {
      editable: false,
      user_id: "",
      user: {
        name: "",
        email: "",
        phone: " ",
        password: " "
      }
    }

    this.goBack = this.goBack.bind(this);    
  }

  onBackButtonPressAndroid = () => {
    return true;
  };



  componentDidMount(){

    firebase.auth().onAuthStateChanged((user) => {        
      if (user) {                                                               
        console.log(user.uid)  
        this.setState({
          user_id: user.uid
        })                                    
      }
      else {
        this.props.navigation.navigate('Login');
      }
    });
      
    this.fetchData();
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);

  }

  fetchData(){

    let data = { 
      id: this.props.navigation.getParam('product_id')
    }


    fetch('http://platinum-web.azurewebsites.net/api/getProfile',{ method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.user_id
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({
        clock_data: responseJson.data,
        loading: false
      })
    })

    }

  goBack(){
    this.props.navigation.navigate('Home');
  }

  renderProfile(){

  }

  render(){
    return(
      <Container style={{backgroundColor: '#1a1a1a'}}>
       <StatusBar hidden={true}/>
        <Header noShadow elevation={false} style={Style.header}>
          <Left >
            <TouchableOpacity onPress={this.goBack}>
              <View style={{padding: 15}}>
              <Icon name="chevron-left" size={30} color={'#fff'} />
              </View>
            </TouchableOpacity>            
          </Left>
          <Body>
          </Body>
          <Right >
            <TouchableOpacity onPress={this.renderProfile}>
              <View style={{padding: 15}}>
              <Icon name="pencil" size={30} color={'#fff'} />
              </View>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content contentContainerStyle={Style.content}>
        
          <View>
            <Image source={require('src/Assets/Images/logo.png')} style={Style.logo}/>
              <Text style={{ 
                color: '#fff', 
                fontSize: 25, 
                fontFamily: 'Lato Regular',
                textAlign: 'center',
                }}> 

                {this.state.user.name} 
                
              </Text>
          </View>

          <ProfileForm userData={this.state.user}/>

        </Content>
      </Container>    
    )
  }
}