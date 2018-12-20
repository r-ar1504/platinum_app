/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet,StatusBar, TextInput, ImageBackground, TouchableOpacity, View, Text, Image, YellowBox } from 'react-native';
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
  cellphone: t.String,
  password: t.String
});

const options = {
  stylesheet: stylesheet,
  fields:{
    email:{
      template: iconLabelTemplate,
      label: 'Correo Electronico',
      config:{
        hiddenText: false,
        iconName: "user",
      }
    },
    cellphone:{
      template: iconLabelTemplate,
      label: 'Celular',
      config:{
        hiddenText: false,
        iconName: "phone",
      }
    },
    password:{
      template: iconLabelTemplate,
      label: 'Contraseña',
      config:{
        hiddenText: true,
        iconName: "lock",
      }
    }
  }
}

export default class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.props.userData
    }
    this.getInput = this.getInput.bind(this);

  }//Constructor.

  getInput(){
    let credentials = {
      email: this.refs.login.getComponent('email').getValue(),
      password: this.refs.login.getComponent('password').getValue()
    }

    this.props.handleInput();
  }

  render(){
    return(
      <View>
        <Form type={User} options={options} value={{user: this.state.user}} ref="login"/>
      </View>
    )
  }
}//Form component.


function iconLabelTemplate(locals){
  var containerStyle ={
    marginTop: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  var textBoxStyle = {
    borderWidth: 0,
    fontSize: 15,
    color: '#fff',
    padding: 15,
    paddingLeft:20,
    width:200,
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
    paddingTop:50,
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
    marginTop: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25

  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Light',
  }
});
