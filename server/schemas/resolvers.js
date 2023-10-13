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
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    }
  },
};

module.exports = resolvers;
