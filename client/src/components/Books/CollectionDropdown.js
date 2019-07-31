import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledDropdown = styled.ul`
  z-index: 8000 !important;
`;
const StyledDropdownElement = styled.li`
  padding: 10px 10px;
  vertical-align: middle;
`;
const StyledAddCollectionButton = styled.li`
  padding: 20px 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center !important;
  font-size: ${({ theme }) => theme.fontSize.links};
  color: ${({ theme }) => theme.colors.primary} !important;
`;

function CollectionDropdown(props) {
  return (
    <StyledDropdown id="collection-dropdown" className="dropdown-content">
      <StyledAddCollectionButton
        className="modal-trigger"
        data-target="collection-modal"
      >
        Add Collection
      </StyledAddCollectionButton>
      <li className="divider" tabIndex="-1" />
      <StyledDropdownElement>collection1</StyledDropdownElement>
      <li className="divider" tabIndex="-1" />
      <StyledDropdownElement>collection2</StyledDropdownElement>
      <li className="divider" tabIndex="-1" />
      <StyledDropdownElement>collection3</StyledDropdownElement>
      <li className="divider" tabIndex="-1" />
      <StyledDropdownElement>collection4</StyledDropdownElement>
    </StyledDropdown>
  );
}

CollectionDropdown.propTypes = {};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default CollectionDropdown;
