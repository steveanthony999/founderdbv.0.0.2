import React from 'react';

import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
    } catch (err) {
      console.log(err);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      await loginWithTwitter();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Log in with Google</button>
      <button onClick={handleFacebookLogin}>Log in with Facebook</button>
      <button onClick={handleTwitterLogin}>Log in with Twitter</button>
    </div>
  );
};

export default Login;
