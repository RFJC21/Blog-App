import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-secondary">
          <Link to="/">
            <img src={logo} alt="blog" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link
                className="nav-link active text-white font-weight-bold"
                to="/newpost"
              >
                New Post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
