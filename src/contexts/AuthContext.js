import React, { useContext, useState, useEffect } from 'react';
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from '../firebase';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const history = useHistory();

  const signupWithEmailAndPassword = async (username, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      await setUser(res.user);
      await auth.currentUser.updateProfile({
        displayName: username,
      });
      await setLoading(false);
      await history.push('/');
      await history.go(0);
    } catch (err) {
      await setError(err);
    }
  };

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      await setUser(res.user);
      await setLoading(false);
      await history.push('/');
    } catch (err) {
      await setError(err);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      await setUser(res.user);
      await setLoading(false);
      await history.push('/');
    } catch (err) {
      await setError(err);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const res = await auth.signInWithPopup(facebookProvider);
      await setUser(res.user);
      await setLoading(false);
      await history.push('/');
    } catch (err) {
      await setError(err);
    }
  };

  const loginWithTwitter = async () => {
    try {
      const res = await auth.signInWithPopup(twitterProvider);
      await setUser(res.user);
      await setLoading(false);
      await history.push('/');
    } catch (err) {
      await setError(err);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      await setError(err);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    error,
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
