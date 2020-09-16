const {GET_CONTACT_LIST, SET_FETCHING} = require('../actions/actionTypes');

const initialState = {
  isFetching: true,
  contactList: [],
};

const contactReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_CONTACT_LIST:
      return {...state, contactList: payload};
    case SET_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
