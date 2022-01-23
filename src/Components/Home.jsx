import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import Cart from "./Cart";
import { Link} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        
        <Products {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.isLoggedIn,
    appItems: state.appItems,
    cartItemsCount: state.cartItemsCount,
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch({ type: "LOGIN" }),
    addToCart: (item) => dispatch({ type: "ADD_TO_CART", item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
