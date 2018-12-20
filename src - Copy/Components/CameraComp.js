import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbnail1: null,
      cameraActive: false
    }

    // Metod Binding.
    this.photoHandler     = this.photoHandler.bind(this);
  }
  
  //Take Picture & Send to Parent.
  async photoHandler(){
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);

      this.props.takePicture(data.uri)
    }
  }

  goBack(){

  }
  
  render() {
    return (
      <View style={Style.container}>
        <RNCamera 
          ref={ref => {
            this.camera = ref;
          }}
          style = {Style.preview}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}    
        />  
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
              onPress={this.photoHandler}
              style = {Style.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
}

const Style = StyleSheet.create({
  header:{
    backgroundColor: 'transparent',
    margin: 0,
    elevation: 0
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

