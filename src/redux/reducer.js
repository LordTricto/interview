import { ADD } from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
