import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {});
  };

  return { user, registerUser, loading };
};

export default useFirebase;
