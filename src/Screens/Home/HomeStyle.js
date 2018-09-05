import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
  header:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    zIndex: 1000,
    margin: 9,
    minHeight: 10
  },
  homeHeader:{
    fontSize: 20,
    margin: 15,
    color: '#000',
    fontFamily: 'Lato-Regular'
  },
  loadingCanvas:{
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading:{
    width: 200,
    height: 200,
  },
  ItemCanvas:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});
