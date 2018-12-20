/*-----------------------------------------------------------------
* Default Components                                              |
*-----------------------------------------------------------------*/
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
/*-----------------------------------------------------------------
* Main Stack Navigator: Splash, Login                             |
*-----------------------------------------------------------------*/
import Splash from './Screens/Splash/Splash';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import Home from './Screens/Home/Home';
import Profile from './Screens/Profile/Profile';
import Favorites from './Screens/Favorites/Favorites';
import Product from './Screens/Product/Product';
import Categories from './Screens/Categories/Categories';
import Search from './Screens/Search/Search';
import CategoryProducts from './Screens/CategoryProducts/CategoryProducts';
import UploadWatch from './Screens/UploadWatch/UploadWatch';
import CameraComp from './Components/CameraComp';



/*-----------------------------------------------------------------
* Drawer Navigator                                                |
*-----------------------------------------------------------------*/
import SideMenu from './Components/SideMenu'


/*----------------- ------------------------------------------------
* Main Drawer Navigator: After  Login                             |
*-----------------------------------------------------------------*/
const HomeDrawer = DrawerNavigator({
  Home:{
    screen: Home
  },  
  Profile:{
    screen: Profile
  }, 
  Favorites:{
    screen: Favorites
  } ,
  Product:{
    screen: Product
  },
  Categories:{
    screen: Categories
  },
  CategoryProducts:{
    screen: CategoryProducts
  },
  UploadWatch:{
    screen: UploadWatch
  },
  CameraComp:{
    screen: CameraComp
  }
},
  {
    initialRouteName: 'Home',
    contentComponent: SideMenu,
    drawerBackgroundColor: '#000'
  }//Stack Options
);


/*-----------------------------------------------------------------
* Main Stack Navigator: Splash, Login, Register                    |
*-----------------------------------------------------------------*/
export default StackNavigator({
  Splash:{
    screen: Splash
  },
  Login:{
    screen: Login
  },
  Register:{
    screen: Register
  },
  Home:{
    screen: HomeDrawer
  }, 
  Categories:{
    screen: Categories
  },
  Search:{
    screen: Search
  },
  UploadWatch:{
    screen: UploadWatch
  }
},//StackNavigator Options.
{
  initialRouteName: 'Splash',
  headerMode: 'none'
});//Stack Options);
