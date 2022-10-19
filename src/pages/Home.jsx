import React, { Fragment } from 'react';
import Products from './ProductSection/Products';
import Section from './Section/Section';

const Home = () => {
  return (
    <Fragment>
      <Section />
      <Products />
    </Fragment>
  );
};

export default Home;
