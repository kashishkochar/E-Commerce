import React from "react";
import store from "../Redux/Store";
import { Link } from "react-router-dom";

//hardcoded credentials
const validUsers = {
  user1: "password1",
  user2: "password2",
  user3: "password3",
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      password: "",
      error: false,
      success: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
      error: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  
    if (Object.keys(validUsers).includes(this.state.emailOrUsername)) {
      if (this.state.password === validUsers[this.state.emailOrUsername]) {
        store.dispatch({ type: "LOG_IN", user: this.state.emailOrUsername });
        this.setState({
          success: true,
          error: false,
        });
        return;
      }
    }

    return this.setState({
      ...this.state,
      error: true,
    });
  }

  render() {
    return (
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email or username
            <input
              name="emailOrUsername"
              type="text"
              value={this.state.emailOrUsername}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label><br/>
          <button type="submit">Log in</button>
          {this.state.error && (
            <h2 style={{ color: "red" }}>Invalid username or password</h2>
          )}
          {this.state.success && (
            <div>
              <h2 style={{ color: "green" }}>You are logged in now</h2>
              <Link to="/">Move to Products</Link><br/>
              <Link to="/checkout">Move to Cart </Link>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default LoginForm;
