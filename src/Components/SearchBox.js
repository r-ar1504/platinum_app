/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet, ActivityIndicator, StatusBar, TextInput, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Style from '../Screens/Search/SearchStyle'

export default class SearchBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: ''
    }
  
    this.getQuery = this.getQuery.bind(this);
  }

  getQuery(){;
    this.props.makeQuery(this.state.query)
  }

  render() {
    return (
      <View style={Style.searchBox}>
        <View style={{paddingLeft: 10, width:50}}>
          <Icon name="search" size={20} color={'#000'}/>
        </View>
        <View style={{width:250}}>
          <TextInput  
            ref="input"
            underlineColorAndroid='transparent'
            onSubmitEditing={this.getQuery}
            onChangeText={(query) => this.setState({query})}

            placeholder="Rolex...."
            style={{
              justifyContent:'center',
              width: 200,
              textAlign:'center',
              fontFamily: 'Lato-Regular',
              color: "#000",
              fontSize: 20
            }}
          />
        </View>
      </View> 
    )
  }
}

