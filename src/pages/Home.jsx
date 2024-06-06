import React from "react";
import Header from "../cmop/Header";

import Footer from "../cmop/Footer";
import Maincontent from "../cmop/Maincontent";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta
      name="description"
      content="HOME"
    />
      </Helmet>
      <Header />

      <Maincontent NamePage="HOME page" />

      <Footer />
    </>
  );
};

export default Home;
