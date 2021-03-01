import React from 'react';

import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const loginWithGoogle = async () => {
    try {
      await login();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>Log in with Google</button>
    </div>
  );
};

export default Login;
