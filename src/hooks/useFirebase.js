import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseInitialization from "../firebase/firebase.init";
// firebase initialization
firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // auth observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(true);
      console.log("from auth search user");
      if (user) {
        console.log("from auth");
        setUser(user);
        console.log("user set from auth");
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  // check the user is admin or not

  useEffect(() => {
    const url = `http://localhost:5000/users/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result.admin) {
          setAdmin(true);
          console.log(result);
        } else {
          setAdmin(false);
          console.log(result);
        }
      });
  }, [user.email]);

  // register user
  const registerUser = (name, email, password, location, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // set user in state with displayName
        const registeredUser = userCredential.user;
        registeredUser.displayName = name;
        setUser(registeredUser);
        // update display name to profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        // send user to database
        savedInDB(name, email);

        history.push("/home");
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  // login user
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirectedUrl = location?.state?.from || "/home";
        history.push(redirectedUrl);
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  };

  // log our user

  const logOut = () => {
    signOut(auth).then();
  };

  // saved in database

  const savedInDB = (name, email) => {
    const userToDB = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userToDB),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return { user, admin, registerUser, loading, loginUser, logOut };
};

export default useFirebase;
