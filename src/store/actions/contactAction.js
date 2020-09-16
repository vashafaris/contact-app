import {GET_CONTACT_LIST, SET_FETCHING} from './actionTypes';

export const getContactList = () => {
  return async (dispatch) => {
    console.log('haloow');
    await fetch('https://simple-contact-crud.herokuapp.com/contact')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_CONTACT_LIST,
          payload: res.data,
        });
        setFetching(false);
      })
      .catch((e) => console.log(e));
  };
};

export const setFetching = (isFetching) => {
  return async (dispatch) => {
    dispatch({
      type: SET_FETCHING,
      payload: isFetching,
    });
  };
};
