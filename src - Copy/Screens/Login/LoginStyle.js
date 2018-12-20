import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
  image_container:{
    width: '100%',
    height: '100%',
  },
  logo:{
    width: 200,
    height:120,
    alignSelf: 'flex-start',
    margin: 20
  },
  login_image:{
    width: 40,
    height: 40,
    margin: 5
  },
  links_container:{
    marginTop: 30,
    alignSelf: 'flex-end',
    width: 250,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  link_text:{
    color: '#fff',
    fontSize: 19,
    padding: 10,
    fontFamily: 'Lato-Light'
  },
  footer:{
    position:'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
});
