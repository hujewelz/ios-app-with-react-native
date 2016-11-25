/**
 * @author jewelz hu
 * @date 2016 11-25
 */
import React, { Component, propTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class RHHightScore extends Component {

  _onNextPage() {
    this.props.navigator.push({
      title: 'Second Page',
      component: SecondPage,
    });
    
  }

  render() {
    var contents = this.props.scores.map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          2048 Hight Scores!
        </Text>
        <Text style={styles.scores}>
          {contents}
        </Text>
        <TouchableOpacity onPress={this._onNextPage.bind(this)}>
          <Text style={styles.button}>
            Next Page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

class SecondPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Second Page!
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 5,
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
