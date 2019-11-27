import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import ImageScreen2 from './screens/ImageScreen2';
import pilihan from './screens/pilihan';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Image: ImageScreen,
  Image2: ImageScreen2,
  Pilihan: pilihan, 
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'App Mobile Programming',
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
