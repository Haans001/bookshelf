import React, { useEffect } from 'react';
import styled from 'styled-components';
import BookRecord from '../Books/BookRecord';
import Col from '../StyledComponents/Col';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export default function SearchResults({ data }) {
  return (
    <Wrapper>
      {data &&
        data.map(book => {
          return (
            <Col flex="50%" key={book.id}>
              <BookRecord book={book} />
            </Col>
          );
        })}
    </Wrapper>
  );
}
