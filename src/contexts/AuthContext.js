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
  const history = useHistory();

  const loginWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
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
        console.log(err);
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
        console.log(err);
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
