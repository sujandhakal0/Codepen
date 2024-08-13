import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase";
import toast from "react-hot-toast";
import { Context } from "@/main";
import axios from "axios";

const OAuth = () => {
  const { user, setUser } = useContext(Context);
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await axios.post(
        "https://codepen-backend-t587.onrender.com/api/v1/user/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data.user);
      setUser(data.user);
      toast.success("Sign In Success");
    } catch (error) {
      console.log("Error with google signup", error);
    }
  };
  return (
    <div>
      <button
        className="text-white flex items-center gap-3 "
        onClick={handleGoogleClick}
      >
        {" "}
        <FcGoogle className="text-2xl" /> Continue With Google
      </button>
    </div>
  );
};

export default OAuth;
