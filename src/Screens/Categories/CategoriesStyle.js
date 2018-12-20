import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
  header:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    shadowColor: 'transparent',
    zIndex: 1000,
    minHeight: 10
  },
  title:{
    width: '100%',
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title_text:{
    color: '#000',
    fontSize: 25,
  },
  row_container:{
    width: '100%'
  },
  listcontent:{
    width:'85%'
  },
  loading:{
    marginTop:150
  },
  favorites_list:{
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeableRow:{
    width: '100%',
    marginTop: 25,
    paddingBottom: 0,
  },

});