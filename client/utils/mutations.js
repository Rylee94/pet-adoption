// TODO: Add additional fields/mutations to file - confirm 'PET' todos from below

import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

// TODO: Verify Update for PET is correct
export const ADD_PET = gql`
  mutation addPet($profileId: ID!, $pet: String!) {
    addSkill(profileId: $profileId, pet: $pet) {
      _id
      name
      pets
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
// TODO: Verify Update for PET is correct
export const REMOVE_PET = gql`
  mutation removePet($pet: String!) {
    removeSkill(skill: $pet) {
      _id
      name
      pets
    }
  }
`;
