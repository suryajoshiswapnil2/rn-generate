
/**
 * header component
 * @component
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from './styles';

/**
 * header class
 * @class
 */
class Header extends Component {
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

export default Header;
  