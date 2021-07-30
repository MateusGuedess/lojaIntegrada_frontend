import { gql } from '@apollo/client'

export const LOGIN = gql`
  query Login($email: String!, $password: String!){
    login(email: $email, password: $password){
      name
      email
      password
      loginTry
    }
  }
`

export const RESET_ATTEMPT = gql`
  mutation RESET_ATTEMPT($email: String!) {
    resetAttempt(email: $email) {
      name
      email
      password
      loginTry
    }
  }
`