import React, { useEffect } from 'react';

export default function SearchResults({ data }) {
  return (
    <div>
      {data &&
        data.map(book => {
          return <p>{book.volumeInfo.title}</p>;
        })}
    </div>
  );
}
