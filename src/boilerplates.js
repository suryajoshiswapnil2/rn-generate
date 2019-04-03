/**
 * Boilerplate to be written in files
 * @constant
 * @function
 */

function Capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = {
  styles: file => `
/**
 * Stylesheet for ${file}
 * @styles
 * @constant
 */
  
import { StyleSheet } from "react-native";
  
export default StyleSheet.create({
    container: {
        flex: 1
    }
});
`,
  component: file => `
/**
 * ${file} component
 * @component
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from './styles';

/**
 * ${file} class
 * @class
 */
class ${Capitalize(file)} extends Component {
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

export default ${Capitalize(file)};
  `,

  page: file => `
/**
 * ${file} page/screen
 * @screen
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from './styles';

/**
 * ${file} class
 * @class
 */
class ${Capitalize(file)} extends Component {
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

export default ${Capitalize(file)};
  `,
  container: file => `
/**
 * container for ${file} component
 * @container
 */

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import ${Capitalize(file)} from '../../components/${file}';
  
/**
 * Map your redux state to component props
 * @function
 * @param {object} state (current state of the reducer)
 */
const mapStateToProps = (state) => ({
  // Your code goes here
})
  
/**
 * Add redux actions to component props
 * @function
 * @param {function} dispatch (a function to dispatch actions to reducer)
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ /** Actions */}, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(${Capitalize(
    file
  )});
`,
  utils: file => `
/**
 * ${file} utility functions and constants
 * @function
 * @constant
 */

/**
 * Capitalize word
 * @param {string} name 
 */
function Capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
`,
  lib: file => `
/**
 * ${file} lib function
 * @function
 */
`,

  index: file => `export { default } from './${file}';`
};
