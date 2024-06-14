import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../cmop/Footer";
import Header from "../cmop/Header";

import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/confing";
import { useNavigate } from "react-router-dom";

const Singnin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setFirebaseError] = useState();

  const navigate = useNavigate();

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
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  navigate("/");

                  // ...
                })

                .catch((error) => {
                  const errorCode = error.code;

                  const errorMessage = error.message;
                  console.log(errorMessage);
                  sethasError(true);
                  setFirebaseError(errorCode);
                });
            }}
          >
            Singn In
          </button>
          <p className="account">
            Don't have an account <Link to="/singnup"> Sing-Up</Link>
          </p>
          {hasError && <h2>{firebaseError}</h2>}
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Singnin;
