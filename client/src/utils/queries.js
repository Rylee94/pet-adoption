// TODO: Add additional queries - verify pets is what we want, add additional query params to additional files as needed.

import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      # pets
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      pets
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      pets
    }
  }
`;

export const GET_PETS = gql`
  query pets {
    petProfiles {
      _id
      petName
      petType
      breed
      age
      gender
      photo
      aboutPet
      pottyTrained
    }
  }
`;

export const ADD_PROFILE = gql`
  query addProfile {
    profiles {
      _id
      name
      email
      password
    }
  }
`;
