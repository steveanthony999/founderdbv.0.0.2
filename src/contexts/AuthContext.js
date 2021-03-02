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

  const signupWithEmailAndPassword = (username, email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .then(() => {
        auth.currentUser.updateProfile({
          displayName: username,
        });
        setLoading(false);
        history.push('/');
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const loginWithEmailAndPassword = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  const loginWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  const loginWithFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  const loginWithTwitter = () => {
    auth
      .signInWithPopup(twitterProvider)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  const logout = () => {
    auth.signOut();
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
