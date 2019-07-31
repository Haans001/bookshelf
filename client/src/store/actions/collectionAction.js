import axios from 'axios';
import { tokenConfig } from './authAction';

export const addCollection = collectionName => (dispatch, getState) => {
  const body = {
    collectionName,
  };
  axios.post('/collections/add', JSON.stringify(body), tokenConfig(getState));
};
