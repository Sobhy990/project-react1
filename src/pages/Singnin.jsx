import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../cmop/Footer";
import Header from "../cmop/Header";

import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/confing";

const Singnin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <Helmet>
        <title>Singnin</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="email"
            placeholder="Email"
            required
          />

          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />
          <button
            onClick={(eo) => {
eo.preventDefault()
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user)
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                
                  const errorMessage = error.message;
                  console.log(errorMessage)
                });
            }}
          >
            Singn In
          </button>
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
