/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { BackHandler, StyleSheet,StatusBar, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome';

/*-----------------------------------------------------------------
* Stylesheet                                                       |
*-----------------------------------------------------------------*/
import Style from './LoginStyle';

/*-----------------------------------------------------------------
* Form Component                                                  |
*-----------------------------------------------------------------*/
import LoginForm from './LoginForm';



export default class Login extends Component{
  constructor(props){
    super(props);

    /*Method Binding*/
    this.login = this.login.bind(this);
    this.facebookLogin = this.facebookLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.newAccount = this.newAccount.bind(this);
    this.passwordRecovery = this.passwordRecovery.bind(this);

  }//Constructor.

  login(credentials){

    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(credentials.email, credentials.password).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      
      if( error.code == "auth/invalid-email"){
        Alert.alert(
          'Platinum Times',
          "The email is not valid",
          [
            {text: 'Entendido', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
      else if( error.code == "auth/user-not-found"){
        Alert.alert(
          'Platinum Times',
          "The user doesn't exists",
          [
            {text: 'Entendido', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
      else if( error.code == "auth/wrong-password"){
        Alert.alert(
          'Platinum Times',
          "Incorrect Password",
          [
            {text: 'Entendido', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
      
    });

  }

  
  onBackButtonPressAndroid = () => {
    return true;
  };

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    setTimeout(()=>{
      this.authSubscription = firebase.auth().onAuthStateChanged((user) => {        
        if (user) {                                                               
          this.props.navigation.navigate('Home');                                        
        }
        else {
          this.props.navigation.navigate('Login');
        }
      });
    },1000);
  }  

  googleLogin(){
    alert("googleLogin");
  }//googleLogin
  newAccount(){
    this.props.navigation.push('Register');
  }//newAccount
  passwordRecovery(){
    alert("passwordRecovery");
  }//passwordRecovery

  render(){
    return(
      <View>
      <StatusBar hidden={true}/>
        <ImageBackground
          source={ require('src/Assets/Images/login_background.jpg')}
          style={{
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start'}}>
          <Image source={ require('src/Assets/Images/logo.png') }  style={Style.logo}/>
          <LoginForm handleInput={this.login}/>

          <View style={Style.links_container}>

          </View>

          <View style={Style.footer}>
            <TouchableOpacity onPress={this.newAccount}>
              <Text style={Style.link_text} >
                Create Account
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={this.passwordRecovery}>
              <Text style={Style.link_text} >
              </Text>
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    )
  }//Render Method.
}//Login Component. 

