const { Profile, PetProfile } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const profile = await Profile.findOne({ _id: context.user._id });
        return profile;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    petProfiles: async () => {
      return PetProfile.find();
    },
    petProfile: async (parent, { petProfileId }) => {
      return PetProfile.findOne({ _id: petProfileId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password, location }) => {
      const profile = await Profile.create({ name, email, password, location });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("Invalid email or password");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid email or password");
      }

      const token = signToken(profile);
      return { token, profile };
    },
    updateUserProfile: async (parent, { name, email, password, location }, context) => {
        if (context.user) {
          const profile = await Profile.findOneAndUpdate(
            { _id: context.user._id },
            { name, email, password, location },
            { new: true }
          );
          return profile;
        }
        throw new AuthenticationError("You need to be logged in!");
      },
      
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        const profile = await Profile.findOneAndDelete({
          _id: context.user._id,
        });
        return profile;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addPetProfile: async (parent, { petInput }) => {
      const petProfile = await PetProfile.create(petInput);
      return petProfile;
    },
    updatePetProfile: async (parent, { petId, petInput }) => {
        const petProfile = await PetProfile.findOneAndUpdate(
          { _id: petId },
          petInput,
          { new: true }
        );
        return petProfile; // Make sure to return the updated petProfile
      },
      
    deletePetProfile: async (parent, { petId }) => {
      const petProfile = await PetProfile.findOneAndDelete({ _id: petId });
      return petProfile;
    },
  },
};

module.exports = resolvers;
