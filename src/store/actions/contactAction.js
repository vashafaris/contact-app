import {
  GET_CONTACT_LIST,
  SET_FORM,
  SET_DEFAULT_FORM,
  SET_FETCHING,
  SET_UPDATE_FORM,
} from './actionTypes';

export const setDefaultForm = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_DEFAULT_FORM,
    });
  };
};

export const setUpdateForm = (id, contactList) => {
  return async (dispatch) => {
    const data = contactList.find((item) => item.id == id);
    dispatch({
      type: SET_UPDATE_FORM,
      payload: data,
    });
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

export const setForm = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: SET_FORM,
      payload: payload,
    });
  };
};

export const getContactList = () => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    await fetch('https://simple-contact-crud.herokuapp.com/contact')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_CONTACT_LIST,
          payload: res.data,
        });
      })
      .catch((e) => {
        alert(e);
        dispatch({
          type: GET_CONTACT_LIST,
          payload: [],
        });
      });
  };
};

export const postContact = (payload) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    console.log('masuk post', payload);
    await fetch('https://simple-contact-crud.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(async (res) => {
        alert(res.message);
        dispatch(getContactList());
      })
      .catch((e) => alert(e));
  };
};

export const putContact = (id, payload) => {
  return async (dispatch) => {
    console.log('put', id, payload);
    delete payload.id;
    dispatch(setFetching(true));
    await fetch('https://simple-contact-crud.herokuapp.com/contact/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(async (res) => {
        alert(res.message);
        dispatch(getContactList());
      })
      .catch((e) => alert(e));
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    await fetch('https://simple-contact-crud.herokuapp.com/contact/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        dispatch(getContactList());
      })
      .catch((e) => {
        alert(e);
      });
  };
};
