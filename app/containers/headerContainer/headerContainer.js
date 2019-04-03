
/**
 * container for header component
 * @container
 */

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import Header from '../../components/header';
  
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
