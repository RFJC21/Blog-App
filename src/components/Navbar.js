import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark">
          <Link to="/">
            <img src={logo} alt="blog" className="navbar-brand" />
          </Link>
        </nav>
      </div>
    );
  }
}
