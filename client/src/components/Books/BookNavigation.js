import React from 'react';

export default function BookNavigation() {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item grey lighten-3 ">
          <a className="btn">
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
    </div>
  );
}
