/**
 * container for headerContainer component
 * @container
 */

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderContainer from "../../components/headerContainer";

/**
 * Map your redux state to component props
 * @function
 * @param {object} state (current state of the reducer)
 */
const mapStateToProps = state => ({
  // Your code goes here
});

/**
 * Add redux actions to component props
 * @function
 * @param {function} dispatch (a function to dispatch actions to reducer)
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      /** Actions */
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
