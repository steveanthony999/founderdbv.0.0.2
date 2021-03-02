import { useRef } from 'react';

import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signupWithEmailAndPassword, error } = useAuth();

  const handleEmailAndPasswordSignup = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return console.log('pw dont match - create an error handler component');
    }

    signupWithEmailAndPassword(
      userNameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  return (
    <div>
      <form onSubmit={handleEmailAndPasswordSignup}>
        <input type='text' ref={userNameRef} placeholder='User Name' />
        <input type='email' ref={emailRef} placeholder='Email Address' />
        <input type='password' ref={passwordRef} placeholder='Password' />
        <input
          type='password'
          ref={passwordConfirmRef}
          placeholder='Confirm Password'
        />
        <button type='submit'>Sign Up</button>
      </form>
      <p>{error && error.message}</p>
    </div>
  );
};

export default Signup;
