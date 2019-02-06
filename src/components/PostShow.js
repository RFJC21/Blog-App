import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../store/actions/index";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    return <div>Post Show!</div>;
  }
}

const mapStateToProps = ({ posts }) => {};

export default connect(
  null,
  { fetchPost }
)(PostShow);
