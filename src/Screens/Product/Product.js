/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Footer, Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'


import Style from './ProductStyle'

export default class Product extends Component{
  constructor(props){
    super(props);

    
    this.state = {
      loading: true,
      clock_data: "",
      user_id: " ",
      fav_color: "#fff"
    }

    this.goBack = this.goBack.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  goBack(){
    this.props.navigation.navigate('Home');
  }

  componentDidMount(){

    if (this.props.navigation.getParam('is_fav') != null ) {
      this.setState({
        fav_color: "#E7320C"
      })
    }

    firebase.auth().onAuthStateChanged((user) => {        
      if (user) {                                                               
        console.log(user.uid)  
        this.setState({
          user_id: user.uid
        })                                    
      }
      else {
        this.props.navigation.navigate('Login');
      }
    });
      
    this.fetchData();
  }


  addFavorite(){

    let data = { 
      id_user: this.state.user_id,
      id_product: this.state.clock_data.idProducts
    }

    console.log(data)


    fetch('http://platinum-web.azurewebsites.net/api/addFavorites',{ method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_user: this.state.user_id,
        id_product: this.state.clock_data.idProducts
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        fav_color: '#E7320C'
      })
      Alert.alert(
        'Platinum',
        'Succesfully added to favorites!',
        [
          {text: 'Aceptar', onPress: () => console.log("Cerrar"),}
        ],
        { cancelable: false }
      )
    })

  }


  fetchData(){

    let data = { 
      id: this.props.navigation.getParam('product_id')
    }


    fetch('http://platinum-web.azurewebsites.net/api/getProductId',{ method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        clock_data: responseJson,
        loading: false
      })
    })

    firebase.auth().onAuthStateChanged((user) => {        
      if (user) {                                                               
        fetch('http://platinum-web.azurewebsites.net/api/getProfile',{ method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firebase_id: user.uid
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          user: responseJson.data,
          loading: false
        })
      })
        
      }
    });

    console.log(this.state.user_id)
 




    }
         

  addToCart(){

    console.log(this.state)
    fetch('http://platinum-web.azurewebsites.net/api/interestedProduct',{ method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: this.state.user.email,
      name:  this.state.user.name,
      phone: "1",
      product_id: this.state.clock_data.idProducts
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    Alert.alert(
      'Platinum',
      "Request succesful, we'll contact you as soon as posible!",
      [
        {text: 'Entendido', onPress: () => console.log("Cerrar"),}
      ],
      { cancelable: false }
    )
  })
  }

  renderProduct(){
    if(this.state.loading){
      return(
        <View style={{ width: '100%' , height: '100%'}}>
          
          <ActivityIndicator  accessibilityTraits="text" size="large" color="#fff" style={Style.loading}/>

        </View>
      )
    }else{
      if(this.state.clock_data != null){
        return(
          <View style={Style.clock_data_container}>

            <View style={Style.image_container}>            
             <Image source={{uri: "http://platinum-web.azurewebsites.net/" + this.state.clock_data.image}} style={Style.clock_image}/>
            </View>

            <View style={Style.price_container}>
                <Text style={Style.price_text}>
                  $ {this.state.clock_data.public_price} USD
                </Text>
            </View>

            <View style={Style.title_container}>
              <Text style={{marginLeft:50, fontSize: 25, fontFamily:'Lato-Regular', color:'#fff'}}>
                Platinum
              </Text>
              <Text style={{paddingTop: 15,marginLeft:50, fontSize: 27, fontFamily:'Lato-Light', color:'#fff'}}>
                {this.state.clock_data.name}
              </Text>
            </View>

            <View style={Style.clock_features}>
              
              <View style={Style.features_section}>
                <Text style={Style.features_text}>
                  Color
                </Text>
                <Text style={Style.features_text}>
                  Gender
                </Text>       
                <Text style={Style.features_text}>
                  Status
                </Text>     
                <Text style={Style.features_text}>
                  Description
                </Text>  
              </View>
              
              <View style={Style.features_section_right}>
                  <Text style={Style.features_content}>
                    {this.state.clock_data.color}
                  </Text>
                  <Text style={Style.features_content}>
                    {this.state.clock_data.gender}
                  </Text>       
                  <Text style={Style.features_content}>
                    {this.state.clock_data.status}
                  </Text>     
                  <Text style={Style.features_content}>
                    {this.state.clock_data.description}
                  </Text>     
             </View>

            </View>

            <TouchableOpacity onPress={this.addToCart}>
              <View style={Style.cart_button}>
                <Text style={{color: '#fff', fontSize: 20, fontFamily: 'Lato-Regular'}}>
                  Quote
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        )
      }//Render Clock Data.
    }
  }
  
  render(){
    return(
      <Container>
       <StatusBar hidden={true}/>
        <Header  style={Style.header} >
          <Left >
            <TouchableOpacity onPress={this.goBack}>
              <View style={{padding: 15}}>
              <Icon name="chevron-left" size={30} color={'#fff'} />
              </View>
            </TouchableOpacity>            
          </Left>
          <Body>
          </Body>
          <Right >
            <TouchableOpacity onPress={this.addFavorite}>
              <View style={{padding: 15}}>
               <Icon name="heart" size={30} color={this.state.fav_color} />
              </View>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content contentContainerStyle={Style.content}>
          { this.renderProduct() }
        </Content>
      </Container>  
    )
  }
}