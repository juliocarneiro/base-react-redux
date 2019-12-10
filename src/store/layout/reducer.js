import * as types from './actionTypes';

const initialState = {
  menu: {
    opened: false,
  },
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_STATE:
      return {
        ...state,
        menu: {
          ...state.menu,
          opened: action.opened,
        },
      };
    default:
      return state;
  }
}
