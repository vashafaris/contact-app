const {
  GET_CONTACT_LIST,
  SET_FETCHING,
  SET_FORM,
  SET_DEFAULT_FORM,
  SET_UPDATE_FORM,
} = require('../actions/actionTypes');

const initialState = {
  isFetching: false,
  contactList: [],
  form: {
    firstName: '',
    lastName: '',
    age: '',
    photo:
      'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
  },
};

const contactReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_CONTACT_LIST:
      return {...state, contactList: payload, isFetching: false};
    case SET_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    case SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.property]: payload.value,
        },
      };
    case SET_UPDATE_FORM:
      return {
        ...state,
        form: payload,
      };
    case SET_DEFAULT_FORM:
      return {
        ...state,
        form: {
          firstName: '',
          lastName: '',
          age: '',
          photo:
            'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
        },
      };
    default:
      return state;
  }
};

export default contactReducer;
