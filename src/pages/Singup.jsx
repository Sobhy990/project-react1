/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Footer from "../cmop/Footer";
import Header from "../cmop/Header";
import { Link } from "react-router-dom";
import { auth } from "../firebase/confing";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const singup = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <Helmet>
        <title>singup</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p style={{ fontSize: "25 px", marginBottom: "22px" }}>
            Create New Account...<span>🧡</span>
          </p>

          <input
            onChange={(eo) => {
              setemail(eo.target.value);
              // console.log(eo.target.value)
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
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log("done");
                  navigate("/");

                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  // ..
                });
            }}
          >
            Singn Up
          </button>
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
