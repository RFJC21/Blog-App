import _ from "lodash";

import * as actionTypes from "../actions/actions";

const PostReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case actionTypes.FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");

    default:
      return state;
  }
};

export default PostReducer;
