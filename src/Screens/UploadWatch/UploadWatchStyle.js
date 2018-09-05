import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default Style = StyleSheet.create({
  header:{
    backgroundColor: 'transparent',
    margin: 0,
    elevation: 0
  },
  container:{
    backgroundColor: '#000',
    height: '100%'
  },
  fields:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH*.75,
  },
  field:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%'
  },
  input:{
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff'
  },
  label:{
    margin: 5,
    color: '#fff',
    width: '100%',
  }
});