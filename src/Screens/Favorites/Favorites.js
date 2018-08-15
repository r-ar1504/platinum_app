/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import {  SwipeRow, Title, Footer, Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { BackHandler, StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'

import Style from './FavoritesStyle';
import ClockRow from 'src/Components/ClockRow';

export default class Favorites extends Component{
  constructor(props){
    super(props);    

    this.state = {
      loading: true,
      clock_data: "",
      user_id: " "
    }

    this.fetchData = this.fetchData.bind(this);
    this.renderFavs = this.renderFavs.bind(this);    
    this.removeFav = this.removeFav.bind(this);  
    this.openProduct = this.openProduct.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  removeFav(item_id){
    console.log(this.state.user_id)     
    console.log(item_id)

    fetch('http://platinum-web.azurewebsites.net/api/removeFavorites',{ method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_user: this.state.user_id,
        id_product: item_id
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })

    this.fetchData();

    this.setState({
      loading: true
    })
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.navigate('Home');

  };

  componentDidMount(){

    firebase.auth().onAuthStateChanged((user) => {        
      if (user) {               
        this.setState({
          user_id: user.uid
        })  
        
        fetch('http://platinum-web.azurewebsites.net/api/getFavorites',{ method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firebase_id: user.uid,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          favorites_list: responseJson,
          loading: false
        })  
      })
      }
      else {
        this.props.navigation.navigate('Login');
      }
    });
    
    this.fetchData();

    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);

  }

  fetchData(){

    firebase.auth().onAuthStateChanged((user) => {        
      if (user) {               
        this.setState({
          user_id: user.uid
        })  
        
        fetch('http://platinum-web.azurewebsites.net/api/getFavorites',{ method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firebase_id: user.uid,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          favorites_list: responseJson,
          loading: false
        })  
      })
      }
      else {
        this.props.navigation.navigate('Login');
      }
    });
    
  }

  openProduct(id){
    this.props.navigation.navigate('Product', {product_id: id, is_fav: true});
  }

  goBack(){
    this.props.navigation.navigate('Home');
  }

  renderFavs(){
    if ( this.state.loading) {
        return(

          
          <ActivityIndicator  accessibilityTraits="text" size="large" color="#000" style={Style.loading}/>

        )
    }else{
      return(

        this.state.favorites_list.map( (item, i) => {
       
          return(

            <View key={ item.idProducts } style={Style.swipeableRow}>

              <SwipeRow
                leftOpenValue={0}
                rightOpenValue={-90}
                left={
                  <Button success onPress={() => alert('Add')}>
                    <Icon name="align-justify" color="#1a1a1a" size={30} />
                  </Button>
                }
                body={
                    <ClockRow data={item} openProduct={this.openProduct}/>
                }
                right={
                  <Button danger onPress={() => this.removeFav(item.idProducts)}>
                    <Icon name="trash" color="#1a1a1a" size={40} />
                  </Button>
                }             

              />
            </View>

          )

        })

      )
    }
  }

  render(){
    return(
      <Container style={{backgroundColor: '#fff'}} >
      <StatusBar hidden={true}/>
        <Header style={Style.header}>

          <TouchableOpacity onPress={this.goBack}>
            <Left  style={{flex: 1}}>
              <View style={{padding: 15}}>
                <Icon name="chevron-left" size={30} color={'#000'} />
              </View>
            </Left>
          </TouchableOpacity>

          <Body style={{ flex: 1}}>

          </Body>

          <Right style={{flex: 1}}>

          </Right>

        </Header>
        
        <Content>
          
          <View style={Style.title} scrollable>
            <Text style={Style.title_text}>
              Productos Favoritos
            </Text>
          </View>
          <ScrollView contentContainerStyle={Style.favorites_list}>

            { this.renderFavs() }

          </ScrollView>          
        </Content>

      </Container>
    )
  }
}



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
  },
  {
    id: 1,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 1,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 1,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 1,
    name: "Rolex Gold W123",
    price: 123.2000,
    image: "http://www.pngmart.com/files/6/Watch-PNG-Image.png"
  },
  {
    id: 1,
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