/*eslint-disable */
import React, { useEffect } from 'react';
import M from 'materialize-css';
import CollectionDropdown from './CollectionDropdown';
import CollectionModal from './CollectionModal';

export default function BookNavigation() {
  useEffect(() => {
    M.Dropdown.init(document.querySelectorAll('#book-nav-dropdown-trigger'), {
      alignment: 'left',
      coverTrigger: false,
    });
    M.Modal.init(document.querySelectorAll('#collection-modal'));
  });

  return (
    <div>
      <ul className="collection">
        <li className="collection-item grey lighten-3 ">
          <a
            className="btn"
            id="book-nav-dropdown-trigger"
            data-target="collection-dropdown"
          >
            Add to collection <i className="material-icons right">add</i>
          </a>
        </li>
        <li className="collection-item grey lighten-3">
          <a className="btn blue darken-2">
            View on Google Books <i className="material-icons right">send</i>
          </a>
        </li>
        <li className="collection-item grey lighten-3">
          <a className="btn pink lighten-1">
            Want to read!<i className="material-icons right">favorite</i>
          </a>
        </li>
      </ul>

      <CollectionDropdown />
      <CollectionModal />
    </div>
  );
}
