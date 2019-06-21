import React from 'react';
import { connect } from 'react-redux';

function Preload({ isLoading, children }) {
  return (
    <React.Fragment>
      {!isLoading ? <React.Fragment>{children}</React.Fragment> : null}
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});
export default connect(
  mapStateToProps,
  null
)(Preload);
