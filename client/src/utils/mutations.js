// TODO: Add additional fields/mutations to file - confirm 'PET' todos from below

import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) 
  { addProfile(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

// TODO: Verify Update for PET is correct
export const ADD_PET = gql`
  mutation addPet($profileId: ID!, $pet: String!) {
    addPet(profileId: $profileId, pet: $pet) {
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
    }
  }
`;

// Corrected mutation for REMOVE_PET
export const REMOVE_PET = gql`
  mutation removePet($pet: String!) {
    removePet(pet: $pet) {
      _id
      name
      pets
    }
  }
`;

export const SAVE_PET = gql`
  mutation savePet($petId: ID!) {
    savePet(petId: $petId) {
      _id
      petName
    }
  }
`;

