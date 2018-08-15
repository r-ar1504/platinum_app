
/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import {  SwipeRow, Title, Footer, Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { TextInput, BackHandler, StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemCard from 'src/Screens/Home/ItemCard';
import firebase from 'react-native-firebase';
import RadioGroup,{Radio} from "react-native-radio-input";


/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import SearchBox from "src/Components/SearchBox"

/*-----------------------------------------------------------------
* Style                                                           |
*-----------------------------------------------------------------*/
import Style from "./SearchStyle";


export default class Search extends Component{
  constructor(props){
    super(props);

    this.state = {
      items: null,
      loading: false,
      top: 10,
      low: 1000,
      high: 100000,
      genre: "Hombre"
    }//State definition.

    this.openProduct = this.openProduct.bind(this);
    this.fetchQuery  = this.fetchQuery.bind(this);
    this.goBack = this.goBack.bind(this);
    this.getChecked = this.getChecked.bind(this);
  }


  goBack(){
    this.props.navigation.navigate('Home');
  }


  getChecked = (value) =>{
    this.setState({
      genre: value
    })
  }

  fetchQuery(query){
    this.setState({
      loading: true
    })
    console.log(this.state)

    var data = { 
      value: query,
      genero: this.state.genre,
      min: parseInt(this.state.low),
      max: parseInt(this.state.high)
    }

    console.log(data)
    fetch ('http://platinum-web.azurewebsites.net/api/filterProducts',{ method: 'POST',
    body: JSON.stringify(data)
    })
    .then( (response) => response.json() )
    .then( (response) =>{
      console.log(response.data);
        this.setState({
        items : response.data,
        loading: false
      })
    });
  }



  openProduct(product_id){
    this.props.navigation.navigate('Product', {product_id: product_id});
  }

  renderItems(){
    if( this.state.loading ){
      return(
        <View style={ Style.loadingCanvas }>

          <ActivityIndicator  accessibilityTraits="text" size="large" color="#000" style={Style.loading}/>

        </View>
      )
    }else{

        if (this.state.items != null) {

          return(
            this.state.items.map((item, i) =>{

              return(            
                <ItemCard data={JSON.stringify(item)} key={item.idProducts} handleClick={this.openProduct}/>
              )
    
            })
          )
        }else{
          return(
            <Text style={{fontSize: 20, padding: 40}}> No Hay Elementos </Text>
          )
        }

    }
  }

  render(){
    return(
      <Container contentContainerStyle={{height: '100%'}}>
        <StatusBar hidden={true}/>
        <Header style={Style.header}>
        <TouchableOpacity onPress={this.goBack}> 
            <Left style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginRight: 20}}>
              <Icon name="chevron-left" color="#fff" size={30} />
            </Left>
        </TouchableOpacity> 
          <SearchBox makeQuery={this.fetchQuery}/>
        </Header>
        <Content contentContainerStyle={{backgroundColor: '#fff'}}>
          <View style={Style.formSection}>
            <View style={Style.checkButtons}>
              <RadioGroup 
                getChecked={this.getChecked} 
                rowDirection="row"          
                RadioGroupStyle={{
                  flexDirection: 'row',
                  height: 30
                }}
                labelStyle={{fontSize:12}}
              >
                <Radio iconName={"lens"} label={"Men"} value={"Hombre"} />
                <Radio iconName={"lens"} label={"Women"} value={"Mujer"} />

              </RadioGroup>
            </View>
            <View style={Style.minMax}>
                <Text style={{width: '15%' , fontSize: 10, fontFamily: 'Lato-Regular'}}>Low</Text>
                <TextInput
                 style={{width: '32%', height: 40}}
                 placeholder="12,000"
                 onChangeText={(value) => {this.setState({low: value})}}
                 keyboardType={"numeric"}
                />

                <Text style={{width: '15%' , fontSize: 10, fontFamily: 'Lato-Regular'}}>High</Text>
                <TextInput
                 style={{width: '32%', height: 40}}
                 placeholder="100,000"
                 onChangeText={(value) => {this.setState({high: value})}}
                 keyboardType={"numeric"}
                />
                
            </View>
          </View>
          <ScrollView contentContainerStyle={Style.ItemCanvas}>
            {this.renderItems()}
          </ScrollView>
        </Content>
      </Container>
    )
  }

}