import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseInitialization from "../firebase/firebase.init";
// firebase initialization
firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // auth observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  // register user
  const registerUser = (email, password, location, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push("/home");
      })
      .catch((error) => {});
  };
  // login user
  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirectedUrl = location?.state?.from || "/home";
        history.push(redirectedUrl);
      })
      .catch((error) => console.log(error.message));
  };

  // log our user

  const logOut = () => {
    signOut(auth).then();
  };

  return { user, registerUser, loading, loginUser, logOut };
};

export default useFirebase;
