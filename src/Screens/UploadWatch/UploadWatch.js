import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Container, Header, Body, Left, Right, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import RenderThumbnails from '../../Components/RenderThumbnails';
import Style from './UploadWatchStyle';
import CameraComp from '../../Components/CameraComp';



export default class UploadWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbnail: null,
      cameraActive: false
    }

    // Metod Binding.
    this.goBack            = this.goBack.bind(this);
    this.savePhoto         = this.savePhoto.bind(this);
    this.renderContent     = this.renderContent.bind(this);
    this.takePicture       = this.takePicture.bind(this);
    this.pictureTaken      = this.pictureTaken.bind(this);
    this.sendData          = this.sendData.bind(this);
  }

  goBack(){
    this.props.navigation.navigate('Home');
  }

  //Save Photo From Camera Component.
  savePhoto(image_uri){

  }

  sendData(){
    console.log(this.state)
  }

  takePicture(){
    this.setState({
      cameraActive: true
    })
  }

  pictureTaken(photo_uri){
    this.setState({
      cameraActive: false,
      thumbnail: photo_uri
    })

    console.log(this.state)
  }

  //Upload Form Data
  sendData(){
    //console.warn(this.state);
    var data = new FormData();
    if (this.state.thumbnail != null) {
      data.append('image',{
        uri: this.state.thumbnail,
        name: 'watch.jpg',
        type: 'image/jpg'
      });
  
      data.append('boxes',this.state.boxes)
      data.append('brand',this.state.brand)
      data.append('comments',this.state.comments)
      data.append('desired_amount',this.state.desired_amount)
      data.append('reference',this.state.reference)
  
      fetch('http://platinum-web.azurewebsites.net/sellMyWatch',{
        method: 'POST',
        headers:{
         'Accept': 'application/json',
         'Content-Type': 'multipart/form-data;',
        },
        body: data
      }).then((response) => response.json())
      .then((responseJson) => {
  
        this.setState({
          fav_color: '#E7320C'
        })
        Alert.alert(
          'Platinum',
          'Offer sent!',
          [
            {text: 'Accept', onPress: () => console.log("Cerrar"),}
          ],
          { cancelable: false }
        )
      });
    }else{
      Alert.alert(
        'Platinum',
        'Please complete all fields before sending!',
        [
          {text: 'Accept', onPress: () => console.log("Cerrar"),}
        ],
        { cancelable: false }
      )
    }
 
  }
  
  //Render Camera/Form depending on {this.state.cameraActive = true/false }
  renderContent(){

      if( this.state.cameraActive == false){
        return( 
          <Container style={Style.container}>
            <Header style={Style.header}>
      
              <TouchableOpacity onPress={this.goBack}>
                <Left  style={{flex: 1}}>
                  <View style={{padding: 5}}>
                    <Icon name="chevron-left" size={20} color={'#fff'} />
                  </View>
                </Left>
              </TouchableOpacity>
      
              <Body style={{ flex: 1}}>
      
              </Body>
      
              <Right style={{flex: 1}}>
      
              </Right>
      
            </Header>
            
            <Content contentContainerStyle={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#fff', alignSelf:'center'}}> Fill up some data & We'll contact you with an offer. </Text>
              <View style={Style.imagesSection}>
                <RenderThumbnails thumb={this.state.thumbnail} takePicture={this.takePicture}/>
              </View>

              <View style={Style.fields}>

                <View style={Style.field}>
                  <Text style={Style.label}>Brand</Text>
                  <TextInput
                    style={Style.input}
                    onChangeText={ (brand) => this.setState({brand}) }
                    value={this.state.brand}
                    underlineColorAndroid={'transparent'}
                  />
                </View>
                <View style={Style.field}>
                  <Text style={Style.label}>Reference</Text>
                  <TextInput
                    style={Style.input}
                    onChangeText={ (reference) => this.setState({reference}) }
                    value={this.state.reference}
                    underlineColorAndroid={'transparent'}
                  />
                </View>
                <View style={Style.field}>
                  <Text style={Style.label}>Desired Amount</Text>
                  <TextInput
                    style={Style.input}
                    onChangeText={ (desired_amount) => this.setState({desired_amount}) }
                    value={this.state.desired_amount}
                    underlineColorAndroid={'transparent'}
                  />
                </View>
                <View style={Style.field}>
                  <Text style={Style.label}>Boxes/Papers</Text>
                  <TextInput
                    style={Style.input}
                    onChangeText={ (boxes) => this.setState({boxes}) }
                    value={this.state.boxes}
                    underlineColorAndroid={'transparent'}
                  />
                </View>
                <View style={Style.field}>
                  <Text style={Style.label}>Comments</Text>
                  <TextInput
                    style={Style.input}
                    onChangeText={ (comments) => this.setState({comments}) }
                    value={this.state.comments}
                                        underlineColorAndroid={'transparent'}                    
                    multiline={true}
                    numberOfLines={4}
                  />
                </View>

              </View>
              <View>
                <TouchableOpacity onPress={this.sendData} style={{backgroundColor: '#000', padding: 10}}>
                  <View style={{height: 50, color: '#fff'  }}>
                    <Text style={{color:'#fff'}}>Send Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </Content>
          </Container>
        )
      }else{
        return(
          <CameraComp thumb={this.props.thumbnail} takePicture={this.pictureTaken}/>
        )
      }
  }

  render() {
    return (  
      <View style={{height: '100%', width: '100%'}}>
        {this.renderContent()}
      </View>
    )
  }
}


