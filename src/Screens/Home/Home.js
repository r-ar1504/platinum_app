/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import {  BackHandler, StyleSheet, ActivityIndicator, StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import ItemCard from './ItemCard';
import firebase from 'react-native-firebase'

/*-----------------------------------------------------------------
* Stylesheet                                                      |
*-----------------------------------------------------------------*/
import Style from './HomeStyle';


export default class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      items: watchData,
      loading: true,
      top: 10
    }//State definition.

    this.openDrawer = this.openDrawer.bind(this);
    this.openProduct = this.openProduct.bind(this);

  }// Constructor.

  onBackButtonPressAndroid = () => {
    return true;
  };

  componentDidMount(){
    this.fetchData();
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

  fetchData(){
    fetch('http://platinum-web.azurewebsites.net/api/newProducts',{ method: 'POST',})
    .then( (response) => response.json() )
    .then( (response) =>{
      console.log(response);
      this.setState({
        items : response,
        loading: false
      })
    });
  }

  openDrawer(){
    this.props.navigation.openDrawer();
  }

  openProduct(product_id){
    this.props.navigation.navigate('Product', {product_id: product_id, is_fav: null});
  }

  renderItems(){
    if( this.state.loading ){
      return(
        <View style={ Style.loadingCanvas }>

          <ActivityIndicator  accessibilityTraits="text" size="large" color="#000" style={Style.loading}/>

        </View>
      )
    }else{
      return(

        this.state.items.map((item, i) =>{

          return(            
            <ItemCard data={JSON.stringify(item)} key={item.idProducts} handleClick={this.openProduct}/>
          )

        })

      )
    }
  }

  render(){
    return(
      <Container style={{backgroundColor: '#fff'}}>
      <StatusBar hidden={true}/>
        <Header style={Style.header}>
          <TouchableOpacity onPress={this.openDrawer}> 
            <Left>
              <Icon name="align-justify" color="#1a1a1a" size={30} />
            </Left>
          </TouchableOpacity> 
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <SwipeableParallaxCarousel
            data={datacarousel}
            titleColor={"#fff"}
            height={300}
          />
        <TouchableOpacity 
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 25
          }}>
          <Text style={{ fontSize: 20, fontFamily: 'Lato Regular', color: '#000'}}>
            Most Recent
          </Text>
        </TouchableOpacity>
         < ScrollView  contentContainerStyle={Style.ItemCanvas}>

          { this.renderItems() }

        </ScrollView>
        </Content>
      </Container>
    )
  }//Render.
}//Home component.


const datacarousel = [
  {
    "id": 1,
    "title": "Your investment journey starts here",
    "imagePath": "http://pidelotu.azurewebsites.net/images/banner1.jpeg"
  },
  {
    "id": 2,
    "title": "Your investment journey starts here",
    "imagePath": "https://pidelotu.azurewebsites.net/images/banner2.jpeg"
  },
  {
    "id": 3,
    "title": "Your investment journey starts here",
    "imagePath": "https://pidelotu.azurewebsites.net/images/banner3.png"
  }
]


const watchData = [
  {
    id: 1,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 2,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 3,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 1,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  }
]
