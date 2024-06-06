import Footer from "../cmop/Footer";
import Header from "../cmop/Header";
import Maincontent from "../cmop/Maincontent";
import { Helmet } from 'react-helmet-async';
const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>Javascript page</title>
        <meta
      name="description"
      content="JAVA"
    />
      </Helmet>
      <Header />
<Maincontent  NamePage="Javascript page"/>

      <Footer />
    </>
  );
};

export default Javascript;
