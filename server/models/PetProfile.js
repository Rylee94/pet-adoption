const { Schema, model } = require("mongoose");

const petProfileSchema = new Schema({
  petName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  petType: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    //   TODO: Add a photo
    required: false,
  },

  aboutPet: {
    type: String,
    required: true,
  },
  pottyTrained: {
    type: String,
    required: false,
  },
});

const PetProfile = model("PetProfile", petProfileSchema);

module.exports = PetProfile;
