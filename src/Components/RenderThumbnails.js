import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class RenderThumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbs: this.props.thumb
    };

    this.takePicture = this.takePicture.bind(this);
  }

  takePicture(){
    this.props.takePicture();
  }

  renderImages(){
    if (this.props.thumb == null) {
      return(
        <TouchableOpacity onPress={this.takePicture}>
          <View style={Style.imageContainerPlaceholder}>
            <Image source={require('src/Assets/Images/placeholder.png')} style={Style.placeholder}/>
          </View>
        </TouchableOpacity>
      )
    }else{
      return(
        <TouchableOpacity onPress={this.takePicture}>
          <View style={Style.imageContainer}>
            <Image source={{uri: this.props.thumb}} style={Style.image}/>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View>
        { this.renderImages()  }
      </View>
    )
  }
}

const Style = StyleSheet.create({
  placeholder:{
    width: 60,
    height: 60,
  },
  imageContainerPlaceholder:{
    width: Dimensions.get('window').width*.70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    padding: 50,
    margin:10,
    backgroundColor: '#2C2C2C'
  },
  image:{
    width: '100%',
    height: '100%'
  },
  imageContainer:{
    width: Dimensions.get('window').width*.70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    margin:10,
    backgroundColor: '#2C2C2C'
  }
});

