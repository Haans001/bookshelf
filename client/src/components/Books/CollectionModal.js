import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addCollection } from '../../store/actions/collectionAction';
import { connect } from 'react-redux';

const StyledModal = styled.div`
  text-align: center;
  padding: 45px 30px !important;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
  .row {
    margin: 0 !important;
    padding: 0 30px;
  }
`;

class CollectionModal extends React.Component {
  state = {
    collectionName: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addCollection } = this.props;
    addCollection(this.state.collectionName);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <StyledModal id="collection-modal" className="modal">
          <div className="modal-content">
            <h4>Enter Collection Name</h4>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 input-field ">
                <input
                  id="collectionName"
                  required
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="collection-name">Collection Name</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn waves-effect waves-light modal-close"
                type="submit"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </StyledModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addCollection,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionModal);
