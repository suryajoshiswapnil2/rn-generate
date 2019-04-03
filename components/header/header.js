
/**
 * header component
 * @component
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from './styles';
import PropTypes from 'prop-types'

/**
 * header class
 * @class
 */
class Header extends Component {

  static propTypes = {
      // Prop Types declarations
  }

  constructor(props){
      super(props);
      this.state = {

      }
  }

  componentDidMount() {
      // Something to do here
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
  