import Footer from "../cmop/Footer";
import Header from "../cmop/Header";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
const singup = () => {
  return (
    <>
      <Helmet>
        <title>singup</title>
      </Helmet>
      <Header />

      <main>
      
        <form>
        <p style={{fontSize:"25 px" , marginBottom:"22px"}}>Create New Account...<span>🧡</span></p>
        <input type="text" placeholder="text" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password"  placeholder="Password" required/>
          <button>Singn Up</button>
          <p className="account">
             Have account go to <Link to="/singnin"> Sing-In</Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default singup;
