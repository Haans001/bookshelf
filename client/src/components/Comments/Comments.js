import React from 'react';
import Comment from './Comment';

export default function Comments({ comments }) {
  return (
    <div>
      <h5 className="teal-text teal-accent-3">
        Comments <i className="material-icons">comment</i>
      </h5>
      {comments ? (
        <React.Fragment>
          {comments.map(comment => {
            return <Comment comment={comment} />;
          })}
        </React.Fragment>
      ) : (
        <h4 className="center teal-text teal-accent-3">
          No comments found for this book
        </h4>
      )}
    </div>
  );
}
