import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Success from "./Success";
import store from "../Redux/Store";

export default function MyRoutes() {
  const state = store.getState();

  return (
    <div>
      <Router>
        <div>
          <Link to="/">Products </Link>
          {!state.isLoggedIn&&<Link to="/login"> Login </Link>}

          <Link to="/checkout"> Cart </Link>

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}
