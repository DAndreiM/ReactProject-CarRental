import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Logout = () => {
  useEffect(() => {
    signOut(auth).catch((err) => console.log(err));
  }, []);

  return <Navigate to={"/"} />;
};

export default Logout;
