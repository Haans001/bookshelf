import { Helmet } from 'react-helmet';
import React from 'react';

function SEO() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Bookphiles</title>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossOrigin="anonymous"
      />

      <link rel="stylesheet" href="https://use.typekit.net/fio3cwu.css" />
    </Helmet>
  );
}

export default SEO;
