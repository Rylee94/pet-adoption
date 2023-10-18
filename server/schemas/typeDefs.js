const typeDefs = `#graphql
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        pets: [PetProfile]
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

  input PetInput {
    # _id: ID
    petName: String!
    petType: String!
    breed: String!
    age: String!
    gender: String!
    photo: String
    aboutPet: String!
    pottyTrained: String
  }

  type Query {
      profiles: [Profile]
      profile(profileId: ID!): Profile
      me: Profile

      petProfiles: [PetProfile]
      petProfile(petProfileId: ID!): PetProfile
      searchPets(petType: String, breed: String): [PetProfile]!


  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUserProfile(name: String, email: String, password: String): Profile
    removeProfile: Profile

    addPetProfile(petInput: PetInput!): PetProfile
    updatePetProfile(petId: ID!, petInput: PetInput!): PetProfile
    deletePetProfile(petId: ID!): PetProfile
    savePetProfile(petId: ID!): PetProfile
    addPetToUser(petInput: ID!): Profile

  }


    `;

module.exports = typeDefs;
