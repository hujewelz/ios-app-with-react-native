/**
 * @author jewelz hu
 * @date 2016-11-25
 */

import React, { Component, propTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  TouchableHighlight,
  ListView,
  Button,
  Image,
} from 'react-native';


export default class RHHightScore extends Component {

  constructor(props) {
    super(props);
    this._onNextPage.bind(this);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }

  componentWillMount() {
    this._getMoviesFromApiAsync();
  }

  render() {
    return (
      <ListView 
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}
      />
       
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableHighlight onPress={() => {
        this._onNextPage(rowData.title);
      }}>
        <View style={styles.container}>
          <Text style={styles.title}>{rowData.title}</Text>
          <Text style={styles.scores}>{rowData.releaseYear}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onNextPage(title) {
    this.props.navigator.push({
      title: title,
      component: SecondPage,
    });
    
  }

  _getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.ds.cloneWithRows(responseJson.movies)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


}

class SecondPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Second Page!
        </Text>
        <Image source={{uri:'http://imgsrc.baidu.com/forum/w%3D580/sign=5099344aca1349547e1ee86c664f92dd/6cd5202ac65c10385d054209b3119313b17e8903.jpg'}}
        style={{width:401, height:277}} />
      </View>
    );
  }

}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  button: {
    backgroundColor: '#6495ed',
    width: 180,
    height: 44,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,

  }

});
