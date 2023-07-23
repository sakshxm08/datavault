import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { logo } from "../assets";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  githubProvider,
  googleProvider,
  // signInWithEmail,
  // signInWithGithub,
  // signInWithGoogle,
} from "../firebase";
import { Backdrop, CircularProgress } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
export const Login = () => {
  // const [registered, setRegistered] = useState(false);
  // const signin = () => {
  //   setRegistered(true);
  // };
  // const signup = () => {
  //   setRegistered(false);
  // };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  // const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (loading) {
  //     setLoader(true);
  //     return;
  //   }
  //   if (user) {
  //     setLoader(false);
  //     navigate("/cloud");
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user, loading]);
  // const handleLoginUser = (e) => {
  //   setLoader(true);
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .then(() => {
  //       navigate("/cloud");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       alert(error.message);
  //       setLoader(false);
  //     });
  // };
  const handleSigninWithGoogle = (e) => {
    setLoader(true);
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .then(() => {
        navigate("/cloud");
      })

      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(errorCode, errorMessage, email);
        alert(error.message);
        setLoader(false);
        // ...
      });
  };
  const handleSigninWithGithub = (e) => {
    setLoader(true);
    e.preventDefault();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .then(() => {
        navigate("/cloud");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(errorCode, errorMessage, email);
        alert(error.message);
        setLoader(false);
        // ...
      });
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <img src={logo} className="rounded-full w-16 mx-auto mb-4" alt="" />

          <h1 className="text-3xl font-titleFont font-extrabold text-sky-950 text-center">
            Welcome to DataVault !
          </h1>
          <h1 className="text-2xl font-titleFont font-extrabold text-sky-900 text-center">
            Sign in to your vault
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <button
            onClick={handleSigninWithGoogle}
            className="font-bodyFont text-base font-bold text-sky-950 hover:bg-sky-700 duration-200 hover:text-sky-50 rounded-xl px-4 py-2 border border-sky-700 flex items-center justify-center gap-4 w-4/5 "
          >
            <span className="rounded-full p-[2px] bg-white">
              <FcGoogle className="text-2xl" />
            </span>
            Sign In with Google
          </button>
          <button
            onClick={handleSigninWithGithub}
            className="font-bodyFont text-base font-bold text-sky-950 hover:bg-sky-700 duration-200 hover:text-sky-50 rounded-xl px-4 py-2 border border-sky-700 flex items-center justify-center gap-4 w-4/5 "
          >
            <span className="rounded-full p-[2px] bg-white">
              <GrGithub className="text-2xl text-black" />
            </span>
            Sign In with Github
          </button>
        </div>
      </div>
      {loader && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};
