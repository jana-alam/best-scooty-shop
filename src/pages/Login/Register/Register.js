import React, { useState } from "react";
import useFirebase from "../../../hooks/useFirebase";

const Register = () => {
  const { user, registerUser } = useFirebase();
  const [registerInfo, setRegisterInfo] = useState({});
  // handle input data
  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...registerInfo };
    newInfo[field] = value;
    setRegisterInfo(newInfo);
  };
  //   handle form submit
  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(registerInfo.email, registerInfo.password);
    console.log(registerInfo);
  };
  return (
    <div className="grid grid-cols-2 p-8 bg-red-200">
      {/* form */}
      <form onSubmit={handleRegister}>
        <input
          onBlur={handleInput}
          name="name"
          type="text"
          autoComplete="false"
        />
        <input onBlur={handleInput} name="email" type="email" />
        <input onBlur={handleInput} name="password" type="password" />
        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default Register;
