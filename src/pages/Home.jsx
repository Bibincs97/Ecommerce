import React, { Fragment } from "react";
import Products from "./ProductSection/Products";
import Section from "./Section/Section";

const Home = ({ setSearchby, Searchby }) => {
  return (
    <Fragment>
      <Section />
      <Products Searchby={Searchby} setSearchby={setSearchby} />
    </Fragment>
  );
};

export default Home;
