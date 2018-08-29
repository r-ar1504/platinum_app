/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Footer, Container, Header, Body, Left, Right, Content, Button } from 'native-base';
import { BackHandler,StyleSheet,StatusBar, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image, YellowBox, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './CategoriesStyle';

import CategoryRow from 'src/Components/CategoryRow';

export default class Categories extends Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      categories: ""
    }

    this.openCategory = this.openCategory.bind(this);
    this.goBack       = this.goBack.bind(this);
  }


  onBackButtonPressAndroid = () => {
    this.props.navigation.navigate('Home');

  };

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    this.fetchData();
  }

  goBack(){
    this.props.navigation.navigate('Home');
  }

  fetchData(){
    fetch('http://platinum-web.azurewebsites.net/api/getCategory',{ method: 'POST',})
    .then( (response) => response.json() )
    .then( (response) =>{
      this.setState({
        categories: response,
        loading: false
      })
    });
  }

  openCategory(id, name){
    this.props.navigation.navigate('CategoryProducts', {category_id: id, category_name : name});

  }


  renderCats(){
    if ( this.state.loading) {
      return(

        
        <ActivityIndicator  accessibilityTraits="text" size="large" color="#000" style={Style.loading}/>

      )
    }else{
      return(

        this.state.categories.map( (item, i) => {

          return(
            <View style={Style.row_container} key={item.idCategory}>
              <CategoryRow openCategory={this.openCategory} categoryData={item} />
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
              Categorías
            </Text>
          </View>
          <ScrollView contentContainerStyle={Style.favorites_list}>

            { this.renderCats() }

          </ScrollView>          
        </Content>

      </Container>
    )
  }
}


const cats = [
  {
    id: 20,
    name: "Rolex"
  },
  {
    id: 21,
    name: "Rolex"
  },
  {
    id: 22,
    name: "Rolex"
  },
  {
    id: 23,
    name: "Rolex"
  },
  {
    id: 24,
    name: "Rolex"
  },
  {
    id: 25,
    name: "Rolex"
  }
]