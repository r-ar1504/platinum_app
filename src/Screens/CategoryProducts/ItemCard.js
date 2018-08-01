/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet,Dimensions,TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ItemCard extends Component{
  constructor(props){
    super(props);

    this.state ={
      clock : JSON.parse(this.props.data)
    }

    this.openProduct = this.openProduct.bind(this);

  }


  openProduct(){
    this.props.handleClick(this.state.clock.idProducts)
  }


  render(){
    return(
      <View style={Style.container}>
        <Image source={{uri:"http://platinum-web.azurewebsites.net/" + this.state.clock.image}} style={Style.clock}/>
        
        <View style={Style.clockDetails}>

          <View style={Style.clockDetail}>
            <Text style={Style.detailText}>{ this.state.clock.name}</Text>            
          </View>

          <View style={Style.clockDetail}>
            <Text style={Style.detailTextBold}>{this.state.clock.coint} {this.state.clock.public_price}</Text>
          </View>

        </View>

        <TouchableOpacity onPress={this.openProduct} 
          style={Style.buyButton}
        >
          <View style={{
            justifyContent: 'center',
            alignItems: 'flex-end'
          }}>
            <Text style={{
              color: '#fff', 
              fontSize: 17,
              fontFamily: 'Lato-Regular',
              paddingRight: 10}}>
               Detalles >
           </Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const { width, height } = Dimensions.get('screen');

const Style = StyleSheet.create({
  container:{
    width: width*.47,
    height: 350,
    borderWidth:  1,
    borderColor: "#cccccc",
    margin: 3,
    marginTop: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    
  },
  clock:{
    paddingTop: 20,
    width: '100%',
    height: '60%'
  },
  clockDetails:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height:'30%'
  },
  clockDetail:{
    width:'50%',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  detailText:{
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  detailTextBold:{
    fontSize: 15,
    fontFamily: 'Lato-Black',
    color: '#000'
  },
  buyButton:{
    backgroundColor: '#000',
    height:'10%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});