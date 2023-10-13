const db = require("../config/connection");
const { Profile } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const { PetProfile } = require("../models");
const petProfileSeeds = require("./petProfileSeeds.json");
// const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await db.dropDatabase();
    // await cleanDB("Profile", "profiles");

    await Profile.create(profileSeeds);

    await PetProfile.create(petProfileSeeds);

    console.log("User and Pet Profiles Created!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
