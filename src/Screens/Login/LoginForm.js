/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { Alert, StyleSheet,StatusBar, TextInput, ImageBackground, TouchableOpacity, View, Text, Image, YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/*-----------------------------------------------------------------
* Form Components                                                 |
*-----------------------------------------------------------------*/
import t from 'tcomb-form-native';
const Form = t.form.Form;

/* Override form stylesheet */
var _ = require('lodash');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

/* Form object */
const User = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  stylesheet: stylesheet,
  fields:{
    email:{
      template: iconLabelTemplate,
      label: 'EMAIL',
      config:{
        hiddenText: false,
        iconName: "user"
      }
    },
    password:{
      template: iconLabelTemplate,
      label: 'PASSWORD',
      config:{
        hiddenText: true,
        iconName: "lock"
      }
    }
  }
}

export default class LoginForm extends Component{
  constructor(props){
    super(props);
    this.getInput = this.getInput.bind(this);
  }//Consructor.

  getInput(){
    let credentials = {
      email: this.refs.login.getComponent('email').getValue(),
      password: this.refs.login.getComponent('password').getValue()
    }

    if(credentials.email == null){
      Alert.alert(
        'Platinum Times',
        'Por favor ingresa tu correo',
        [
          {text: 'Entendido', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      return ;
    }

    if(credentials.password == null){
      Alert.alert(
        'Platinum Times',
        'Por favor ingresa tu contraseña',
        [
          {text: 'Entendido', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      return ;
    }
    
    this.props.handleInput(credentials);
  }

  render(){
    return(
      <View>
        <Form type={User} options={options} ref="login"/>
        <TouchableOpacity onPress={this.getInput}>
          <View style={Style.button}>
            <Text style={{color: '#fff', fontSize: 15}}>
               LOG IN
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}//Form component.


function iconLabelTemplate(locals){
  var containerStyle ={
    marginTop: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  var textBoxStyle = {
    borderWidth: 0,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    fontSize: 19,
    color: '#fff',
    padding: 15,
    width:300,
    textDecorationLine: 'none'
  }
  var labelStyle = {
    paddingTop: 20,
    width: 240,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Light',
    marginLeft:10,
  }
  var iconStyle = {
    paddingTop:30,
    width: 20,
  }
  var icon = locals.config.iconName;
  var inputType = locals.config.hiddenText;
  return(
    <View style={containerStyle}>
      <Icon name={icon} size={30} color={'#fff'}  containerStyle={{
        paddingTop:20,
          }}/>
      <Text style={labelStyle}>
        {locals.label}
      </Text>
      <TextInput
          style={textBoxStyle}
          secureTextEntry={inputType}
          underlineColorAndroid='transparent'
          onChangeText={(value) => locals.onChange(value)}
        />
    </View>
  )
}

const Style = StyleSheet.create({
  button:{
    marginTop: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: '#fff',
    alignSelf: 'center',
    borderColor: '#fff',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  buttonText:{
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Lato-Light',
  }
});
