import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useMutation, gql } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations/mutation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await signUp({
        variables: { email, password },
      });

      console.log('Sign Up Success:', data);
    } catch (error) {
      console.error('Sign Up Error:', error);``
    }

    // Clear the form fields after submission
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
