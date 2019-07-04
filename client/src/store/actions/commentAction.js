import axios from 'axios';
import { tokenConfig } from './authAction';

export const submitComment = comment => (dispatch, getState) => {
  // comment = { book_id, userName,rating,body }
  comment.userName = getState().auth.user.userName;
  const body = JSON.stringify(comment);
  axios
    .post('/books/submit_comment', body, tokenConfig(getState))
    .then(resp => console.log(resp));
};
