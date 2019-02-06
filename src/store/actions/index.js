import axios from "axios";

import * as actionTypes from "./actions";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=CABECA";

export default function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: request
  };
}

//action creator to handle the handle submit
export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: actionTypes.CREATE_POST,
    payload: request
  };
}

//action creator to fetch a particular post
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts${id}${API_KEY}`);
  return {
    type: actionTypes.FETCH_POST,
    payload: request
  };
}
