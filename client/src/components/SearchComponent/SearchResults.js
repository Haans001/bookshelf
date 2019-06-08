import React from 'react';
import BookRecord from '../Books/BookRecord';

export default function SearchResults({ data }) {
  return (
    <section className="searchResults">
      <div className="row">
        {data &&
          data.map(book => {
            return (
              <div className="col m6 s12" key={book.id}>
                <BookRecord book={book} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
