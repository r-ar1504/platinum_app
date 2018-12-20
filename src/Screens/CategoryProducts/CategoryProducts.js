/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet, ActivityIndicator, StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import ItemCard from './ItemCard';


/*-----------------------------------------------------------------
* Stylesheet                                                      |
*-----------------------------------------------------------------*/
import Style from './CategoryProductsStyle';


export default class CategoryProducts extends Component{
  constructor(props){
    super(props);

    this.state = {
      category_name:   this.props.navigation.getParam('category_name'),
      items: " ",
      loading: true,
    }//State definition.

    this.openDrawer = this.openDrawer.bind(this);
    this.openProduct = this.openProduct.bind(this);

  }// Constructor.

  componentDidMount(){

    this.fetchData();

  }

  fetchData(){

    let data = { 
      id: this.props.navigation.getParam('category_id')
    }




    fetch('http://platinum-web.azurewebsites.net/api/getProductByCategory',{ method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        items: responseJson,
        loading: false
      })

    })

    }

  openDrawer(){
    this.props.navigation.openDrawer();
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
        <Header noShadow style={Style.header}>
          <TouchableOpacity onPress={this.openDrawer}> 
            <Left>
              <Icon name="align-justify" color="#1a1a1a" size={25} />
            </Left>
          </TouchableOpacity> 
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
        <TouchableOpacity 
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 25
          }}>
          <Text style={{ fontSize: 20, fontFamily: 'Lato-Regular', color: '#000'}}>
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