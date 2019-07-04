import React from 'react';
import PropTypes from 'prop-types';

export default function Errors({ errors }) {
  return (
    <React.Fragment>
      {errors
        ? errors.map(error => (
            <p key={error.param} className="center red-text">
              {error.msg}
            </p>
          ))
        : null}
    </React.Fragment>
  );
}
Errors.defaultProps = {
  errors: [{ msg: '', param: '' }],
};
Errors.propTypes = {
  errors: PropTypes.arrayOf(),
};
