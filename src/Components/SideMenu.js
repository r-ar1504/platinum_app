import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button, Footer } from 'native-base';
import { StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'


export default class SideMenu extends Component{
  constructor(props){
    super(props);

    this.openProfile = this.openProfile.bind(this);
    this.openFavorites = this.openFavorites.bind(this);
    this.openCatalog = this.openCatalog.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  openProfile(){
    this.props.navigation.navigate('Profile');
  } 

  openFavorites(){
    this.props.navigation.navigate('Favorites');
  }

  openCatalog(){
    this.props.navigation.navigate('Categories');
  }

  signOut(){
    firebase.auth().signOut();
  }

  render(){
    return(
      <Container>
        <Header noShadow style={style.header}>
          <Left>
          </Left>
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>

          <View style={style.BussinesLogo}>
            <Image source={require('src/Assets/Images/logo.png')} style={style.logo}/>
          </View>

           <View style={style.links_container}>

              {/* <TouchableOpacity onPress={this.openProfile}>
                <View style={style.link}> 
                  <Icon name="user" size={20} color={'#fff'} style={{paddingTop:5}}/>
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Perfil</Text>
                </View>
              </TouchableOpacity> */}

              <TouchableOpacity onPress={this.openFavorites}>
                <View style={style.link}> 
                  <Icon name="heart" size={20} color={'#fff'} style={{paddingTop:5}} />
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Favoritos</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.openCatalog}>
                <View style={style.link}> 
                  <Icon name="th-list" size={20} color={'#fff'} style={{paddingTop:5}}/>
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Catalogos</Text>
                </View>
              </TouchableOpacity>

          </View>
    
        </Content>
        <Footer noShadow style={style.footer}>
          <TouchableOpacity onPress={this.signOut}>
            <Text style={{ fontFamily: 'Lato-Regular', color: '#000', fontSize: 20, marginTop: 5}}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    )
  }
}



const style = StyleSheet.create({
BussinesLogo:{
  justifyContent: 'center',
  alignItems: 'center',
  height: 200
},
logo:{
  width: 220,
  height: 150,
},
header:{
  backgroundColor: 'transparent'
},
footer:{
  backgroundColor: '#fff'
},
links_container:{
  width: '100%',
  height: 300
},
link:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  marginLeft:20,
  height: 50,
}
});