import { Schema, model, models } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const userLevels = new Schema({
  _id: reqString,
  userId: reqString,
  userName: reqString,
  guildId: reqString,

  xp: {
    type: Number,
    default: 0,
  },
  total_xp: {
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
});

const name = "user-levels";
module.exports = models[name] || model(name, userLevels);
