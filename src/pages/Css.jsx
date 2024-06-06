import Footer from "../cmop/Footer";
import Header from "../cmop/Header";
import Maincontent from "../cmop/Maincontent";
import { Helmet } from 'react-helmet-async';
const Css = () => {
  return (
    <>
          <Helmet>
        <title>Css page</title>
        <meta
      name="description"
      content="CSS"
    />
      </Helmet>
      <Header />

      <Maincontent NamePage="CSS page" />
      <Footer />
    </>
  );
};

export default Css;
