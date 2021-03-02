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

  const handleEmailAndPasswordLogin = (e) => {
    e.preventDefault();

    loginWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  const handleFacebookLogin = () => {
    loginWithFacebook();
  };

  const handleTwitterLogin = () => {
    loginWithTwitter();
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
