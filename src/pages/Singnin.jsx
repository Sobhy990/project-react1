import { Link } from "react-router-dom";
import Footer from "../cmop/Footer";
import Header from "../cmop/Header";

import { Helmet } from "react-helmet-async";
const Singnin = () => {
  return (
    <>
      <Helmet>
        <title>Singnin</title>
      </Helmet>
      <Header />
      <main>
        <form >
        <input type="email" placeholder="Email" required/>
        <input type="password"  placeholder="Password" required/>
          <button>Singn In</button>
          <p className="account">
            Don't have an account <Link to="/singnup"> Sing-Up</Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Singnin;
