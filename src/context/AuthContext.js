import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Firebase
import { auth } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContextProvider = React.createContext();
export const useAuthContext = () => useContext(AuthContextProvider);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError(null);
      setLoading(false);
    });
    location.pathname == "/signin" && user && navigate("/", { replace: true });
    location.pathname == "/signup" && user && navigate("/", { replace: true });
    return unsubscribe;
  }, [user, location.pathname]);

  const registerUser = (name, email, password) => {
    setError(null);
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => setSuccess("success-register"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const signInUser = (email, password) => {
    setError(null);
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setSuccess("success-login"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const logoutUser = () => {
    signOut(auth)
      .then((res) => setSuccess("success-logout"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const forgotPassword = (email) => {
    setError(null);
    sendPasswordResetEmail(auth, email)
      .then((res) => setSuccess("success-forgotPassword"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const signInUserWithGoogle = () => {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setSuccess("success-login"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const signInUserWithGithub = () => {
    setError(null);
    setLoading(true);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setSuccess("success-login"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const signInUserWithYahoo = () => {
    setError(null);
    setLoading(true);
    const provider = new OAuthProvider("yahoo.com");
    signInWithPopup(auth, provider)
      .then((res) => setSuccess("success-login"))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  //Alert Timer
  const [alertTimer, setAlertTimer] = useState(false);
  useEffect(() => {
    error && setAlertTimer(true);
    success && setAlertTimer(true);
    error &&
      setTimeout(() => {
        setAlertTimer(false);
        setError(null);
      }, 3000);
    success &&
      setTimeout(() => {
        setAlertTimer(false);
        setError(null);
      }, 3000);
  }, [error, success]);

  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword,
    signInUserWithGoogle,
    signInUserWithGithub,
    signInUserWithYahoo,
    alertTimer,
    success,
  };
  return (
    <AuthContextProvider.Provider value={contextValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
