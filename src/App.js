import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import PostsIndex from "./components/PostsIndex";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import PostShow from "./components/PostShow";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={PostsIndex} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
