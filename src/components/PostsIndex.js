import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import fetchPosts from "../store/actions/index";
import { UnListContainer, ListContainer, Title } from "../styles/List";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <ListContainer>
          <li
            className="list-group-item list-group-item-action list-group-item-light"
            key={post.id}
          >
            {post.title}
          </li>
        </ListContainer>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Title>
          <h3>Posts</h3>
        </Title>
        <UnListContainer>
          <ul className="list-group-flush">{this.renderPosts()}</ul>
        </UnListContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
