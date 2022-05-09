import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const _App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>FakeTwitter</title>
    </Head>
    <Component />
  </>
);

_App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default _App;
