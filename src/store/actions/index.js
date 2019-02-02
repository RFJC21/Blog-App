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
