import React, { useEffect } from 'react';

export default function BookDetails(props) {
  useEffect(() => {
    console.log(props.match.params.book_id);
  }, []);
  return <div />;
}
