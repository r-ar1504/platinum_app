import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
  header:{
    backgroundColor: '#000',
    elevation: 0,
    zIndex: 30,
    borderBottomWidth: 0
  },
  logo:{
    width: 150,
    height: 150
  },
  content:{
    paddingTop: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  clock_image:{
    width:50,
    height:50,
    padding: 100,
  },
  clock_data_container:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image_container:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 150,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container:{
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 20,
  },
  price_text:{
    color: '#fff',
    fontSize: 26,
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
  },
  title_container:{
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  feat_box:{
    marginTop:15,
    width: '75%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title_features:{
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderRightWidth: .5,
    borderRightColor: '#000',
  },
  content_feature:{
    width:'50%',
    height: 350,
  },
  title_feature_text:{
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
    color: '#000'
  },
  content_feature_text:{
    marginRight: 10,
    fontSize: 20,
  },
  new:{
    width: '50%',
    height: '100%'
  },
  new_text:{
    color: '#000'
  },
  contenido:{
    backgroundColor: '#000',
    width: '50%',
    height: '100%',
  },
  clock_features:{
    width: '75%',
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row'
  },
  features_section:{
    width: '45%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 10,
    borderRightWidth: .5,
    borderRightColor: '#000',
  },
  features_section_right:{
    width: '55%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  features_text:{
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lato-Bold'
  },
  features_content:{
    color: '#1a1a1d',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Lato-Regular'
  },
  cart_button:{
    width: 300,
    height: 70,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});