import { Schema, model, models } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const profileSchema = new Schema({
  _id: reqString,
  userId: reqString,
  userName: reqString,

  xp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  messageCount: {
    type: Number,
    default: 0,
  },
});

const name = "user-profiles";
module.exports = models[name] || model(name, profileSchema);
