import React, {Component} from 'react';
import { Container, Header, Body, Left, Right, Content, Button, Footer } from 'native-base';
import { Linking, StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActnativeivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'


export default class SideMenu extends Component{
  constructor(props){
    super(props);

    this.openProfile     = this.openProfile.bind(this);
    this.openFavorites   = this.openFavorites.bind(this);
    this.openCatalog     = this.openCatalog.bind(this);
    this.signOut         = this.signOut.bind(this);
    this.openSearch      = this.openSearch.bind(this);
    this.goToInsta       = this.goToInsta.bind(this);
    this.goToFb          = this.goToFb.bind(this);
    this.goToWeb         = this.goToWeb.bind(this);
    this.goToUs          = this.goToUs.bind(this);
    this.openSell        = this.openSell.bind(this);
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

  openSearch(){
    this.props.navigation.navigate('Search');
  }

  openSell(){

  }
  
  goToInsta(){
    Linking.openURL('https://www.facebook.com/platinumtimeco/')
  }

  goToFb(){
    Linking.openURL('https://www.facebook.com/platinumtimeco/')
  }

  goToWeb(){
    Linking.openURL('http://platinum-web.azurewebsites.net/login')
  }
  goToUs(){
    Linking.openURL('mailto:platinum@example.com')
  }
  signOut(){
    console.log("Here");
    firebase.auth().signOut();
  }

  render(){
    return(
      <Container>
        <Header noShadow style={style.header}>

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
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.openCatalog}>
                <View style={style.link}> 
                  <Icon name="th-list" size={20} color={'#fff'} style={{paddingTop:5}}/>
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Catalog</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.openSearch}>
                <View style={style.link}> 
                  <Icon name="search" size={20} color={'#fff'} style={{paddingTop:5}}/>
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Search</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.openSell}>
                <View style={style.link}> 
                  <Icon name="edit" size={20} color={'#fff'} style={{paddingTop:5}}/>
                  <Text style={{ fontFamily: 'Lato-Light', color: '#fff', fontSize: 25, marginLeft: 15}}>Sell My Watch</Text>
                </View>
              </TouchableOpacity>
              

          </View>
    
        </Content>
        <Footer noShadow style={style.footer}>
          <View style={style.socialSection}>
            <View style={style.socialIcon}>
              <TouchableOpacity onPress={this.goToInsta}>
                <Image style={style.imageSO} source={require('src/Assets/Images/insta.png')}/>
              </TouchableOpacity>
            </View>
            <View style={style.socialIcon}>
              <TouchableOpacity onPress={this.goToFb}>
                <Image style={style.imageSO} source={require('src/Assets/Images/fb.png')}/>
              </TouchableOpacity>
            </View>
            <View style={style.socialIcon}>
              <TouchableOpacity onPress={this.goToWeb}>
                <Image style={style.imageSO} source={require('src/Assets/Images/web.png')}/>
              </TouchableOpacity>
            </View>
            <View style={style.socialIcon}>
              <TouchableOpacity onPress={this.goToUs}>
                <Image style={style.imageSO} source={require('src/Assets/Images/us.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={this.signOut} style={{ padding: 5, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontFamily: 'Lato-Regular', color: '#000', fontSize: 20, marginTop: 5}}>Log Out</Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    )
  }
}



const style = StyleSheet.create({
imageSO:{
  width: 25,
  height: 25
},
socialIcon:{
  width: '25%',
  justifyContent: 'center',
  alignItems: 'center',
},
socialSection:{
  width: '100%',
  flexDirection: 'row',
  height: 90,
},
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
  backgroundColor: '#fff',
  flexDirection: 'column',
  height: 120,
  justifyContent: 'center',
  alignItems: 'center'
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