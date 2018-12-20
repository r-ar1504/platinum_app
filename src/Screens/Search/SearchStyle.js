//import liraries
import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
var {height, width} = Dimensions.get('window');
export default Style = StyleSheet.create({
  header:{
    backgroundColor: '#000',
    elevation: 0,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox:{
    width: 300, 
    height: 50, 
    flexDirection:'row',
    justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25 ,
    borderBottomRightRadius: 25 ,
    borderTopRightRadius: 25 ,
    borderTopLeftRadius: 25 ,
  },
  ItemCanvas:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  formSection:{
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center"
  },
  checkButtons:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width/2,
    height: 40
  },
  minMax:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width/2,
    height: 40
  }
});