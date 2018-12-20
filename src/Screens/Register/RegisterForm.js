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
  name: t.String,
  email: t.String,
  password: t.String,
  passwordConf: t.String
});

const options = {
  stylesheet: stylesheet,
  fields:{
    name:{
      template: iconLabelTemplate,
      label: 'NAME',
      config:{
        hiddenText: false
      }
    },
    email:{
      template: iconLabelTemplate,
      label: 'EMAIL',
      config:{
        hiddenText: false
      }
    },
    password:{
      template: iconLabelTemplate,
      label: 'PASSWORD',
      config:{
        hiddenText: true
      },
    },
    passwordConf:{
      template: iconLabelTemplate,
      label: 'CONFIRM PASSWORD',
      config:{
        hiddenText: true
      }
    }
  }
}

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.getInput = this.getInput.bind(this);
  }//Consructor.

  getInput(){
    let credentials = {
      email: this.refs.login.getComponent('email').getValue(),
      password: this.refs.login.getComponent('password').getValue(),
      name: this.refs.login.getComponent('name').getValue(),
      passwordConf: this.refs.login.getComponent('passwordConf').getValue()
    }

    this.props.handleRegister(credentials);

  }

  render(){
    return(
      <View>
        <Form type={User} options={options} ref="login"/>
        <TouchableOpacity onPress={this.getInput}>
          <View style={Style.button}>
            <Text style={{ color: '#fff'}}>
              CREATE ACCOUNT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}//Form component.

function iconLabelTemplate(locals){
  var containerStyle ={
    marginTop: 5,
    width: 300,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  var textBoxStyle = {
    borderWidth: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 25,
    color: '#000',
    padding: 15,
    width:300,
    textDecorationLine: 'none'
  }
  var labelStyle = {
    paddingTop: 10,
    width: 240,
    color: '#000',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
  }
  var iconStyle = {
    paddingTop:15,
    width: 20,
  }
  var icon = locals.config.iconName;
  var inputType = locals.config.hiddenText;
  return(
    <View style={containerStyle}>
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
    backgroundColor: '#000',
    width: 300,
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
    fontSize: 20,
    fontFamily: 'Lato-Light',
  }
});
