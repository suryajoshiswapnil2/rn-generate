
/**
 * login page/screen
 * @screen
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from './styles';

/**
 * login class
 * @class
 */
class Login extends Component {
  constructor(props){
      super(props);
      this.state = {}
  }

  render() {
    return (
      <View>
        <Text> Hey There </Text>
      </View>
    );
  }
}   

export default Login;
  