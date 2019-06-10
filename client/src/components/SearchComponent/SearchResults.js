import React from 'react';
import { connect } from 'react-redux';
import BookRecord from '../Books/BookRecord';

function SearchResults({ data }) {
  return (
    <section className="searchResults">
      <div className="row">
        {data &&
          data.map((book, index) => {
            return (
              <div className="col m6 s12" key={index}>
                <BookRecord book={book} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
const mapStateToProps = state => ({
  data: state.search.searchResults,
});
export default connect(
  mapStateToProps,
  null
)(SearchResults);
