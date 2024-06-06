import React from "react";
import Header from "../cmop/Header";

import Footer from "../cmop/Footer";
import Maincontent from "../cmop/Maincontent";
import { Helmet } from 'react-helmet-async';


const Html = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>HTML page</title>
        <meta
      name="description"
      content="HTML"
    />
      </Helmet>

<Maincontent NamePage="HTML page"/>

      <Footer />
    </>
  );
};

export default Html;
