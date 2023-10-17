const typeDefs = `#graphql
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        pets: [String]
        userRole: String
    }
    type PetProfile {
        _id: ID
        petName: String
        petType: String
        breed: String
        age: String
        gender: String
        photo: String
        aboutPet: String
        pottyTrained: String
    }
    
    type Auth {
    token: ID!
    user: Profile
  }

  type Query {
      profiles: [Profile]
      profile(profileId: ID!): Profile
      me: Profile

      petProfiles: [PetProfile]
      petProfile(petProfileId: ID!): PetProfile
      searchPets(petType: String, breed: String, location: String): [PetProfile]!


  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, location: String!): Auth
    login(email: String!, password: String!): Auth
    updateUserProfile(name: String, email: String, password: String, location: String): Profile
    removeProfile: Profile

    addPetProfile(petInput: PetInput!): PetProfile
    updatePetProfile(petId: ID!, petInput: PetInput!): PetProfile
    deletePetProfile(petId: ID!): PetProfile
    savePetProfile(petId: ID!): PetProfile

  }

  input PetInput {
    petName: String!
    petType: String!
    breed: String!
    age: String!
    gender: String!
    photo: String
    aboutPet: String!
    pottyTrained: String
  }
    `;

module.exports = typeDefs;
