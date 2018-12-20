/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet, ActivityIndicator, StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';

export default class ClockRow extends Component{
  constructor(props){
    super(props)

    this.openProduct = this.openProduct.bind(this);
  }

  openProduct(){
    console.log(this.props.idProducts)
    this.props.openProduct(this.props.data.idProducts);
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={this.openProduct}>
        <View style={Style.row_container}>
          <Image source={{uri: "http://platinum-web.azurewebsites.net/" + this.props.data.image}}  style={Style.row_image} />
          <View style={ Style.clock_info}>
            <Text style={Style.clock_name}> {this.props.data.name} </Text>
            <Text style={Style.clock_price}> MXN {this.props.data.price} </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}


const Style = StyleSheet.create({
  row_container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 70,
    alignItems: 'center',
    width: '100%',
    height: 150,
    borderBottomColor: '#1a1a1a',
    borderBottomWidth: .5 ,
  },
  row_image:{
    width: 90,
    height: 150
  },
  clock_info:{
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width:'85%',
    height: '100%'
  },
  clock_name:{
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  clock_price:{
    marginTop: 10,
    color: '#000',
    fontSize: 30,
    fontFamily: 'Lato-Light',
  }
});


