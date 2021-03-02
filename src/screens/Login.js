import { useRef } from 'react';

import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const {
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    error,
  } = useAuth();

  const handleEmailAndPasswordLogin = async (e) => {
    e.preventDefault();

    try {
      await loginWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      console.log(err);
    }
  };

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
      <form onSubmit={handleEmailAndPasswordLogin}>
        <input type='email' ref={emailRef} placeholder='Email Address' />
        <input type='password' ref={passwordRef} placeholder='Password' />
        <button type='submit'>Log in</button>
      </form>
      <button onClick={handleGoogleLogin}>Log in with Google</button>
      <button onClick={handleFacebookLogin}>Log in with Facebook</button>
      <button onClick={handleTwitterLogin}>Log in with Twitter</button>
      <p>{error && error.message}</p>
    </div>
  );
};

export default Login;
