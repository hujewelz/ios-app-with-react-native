

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  NativeModules,
} from 'react-native';


const IOSApp = NativeModules.IOSApp;

import RHHightScore from './RHHightScore';

export default class NavigatorIOSApp extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      title: 'First page'
    };

  }

  render() {
    return (
      <NavigatorIOS 
        initialRoute = {{
          component:RHHightScore,
          title: this.state.title,
          passProps: {
            scores:[{name: 'Alex', value: '34'},
                    {name: 'Joel', value: '56'}]
          },
          barTintColor: '#996699',
          titleTextColor: '#fff',
          tintColor: '#fff',
          rightButtonTitle: 'Done',
          onRightButtonPress: ()=> IOSApp.dismissViewController(),
        }}
        style={{flex:1}}
      />
    );

  }
}


AppRegistry.registerComponent('NavigatorIOSApp', () => NavigatorIOSApp);



