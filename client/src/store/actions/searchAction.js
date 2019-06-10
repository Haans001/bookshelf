import axios from 'axios';
import { API_KEY } from '../../config/keys';

export const searchBooks = state => dispatch => {
  const { querry, orderBy, maxResults } = state;

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${querry}&orderBy=${orderBy}&maxResults=${maxResults}&key=${API_KEY}`
    )
    .then(resp => {
      dispatch({ type: 'SEARCH_SUCCESS', payload: resp.data.items });
    })
    .catch(err => dispatch({ type: 'SEARCH_FAILED', payload: err }));
  // dispatch({ type: 'SEARCH_SUCCESS', payload: state });
};
