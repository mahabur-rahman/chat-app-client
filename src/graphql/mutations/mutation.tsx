import {  gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(signUpDto: { email: $email, password: $password }) {
      _id
      email
    }
  }
`;
