/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet, ActivityIndicator, StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';

export default class CategoryRow extends Component{
  constructor(props){
    super(props)
    this.openCategory = this.openCategory.bind(this);
  }

  openCategory(){
    this.props.openCategory(this.props.categoryData.idCategory, this.props.categoryData.name);
  }

  render(){
    return(
          <TouchableOpacity onPress={this.openCategory}>
            <View style={Style.Container}>
              <Text style={Style.category_name}> { this.props.categoryData.name} </Text>
            </View>
          </TouchableOpacity>
    )
  }
}


const Style = StyleSheet.create({
  Container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
    borderBottomColor: '#1a1a1a',
    borderBottomWidth: .5 ,
  },
  category_name:{
    marginTop: 10,
    color: '#000',
    fontSize: 30,
    fontFamily: 'Lato-Light',
    textAlign: 'center'
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


