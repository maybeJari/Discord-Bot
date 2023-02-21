import { Schema, model, models } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const userMessages_Schema = new Schema({
  _id: reqString,
  userId: reqString,
  userName: reqString,
  guildId: reqString,

  message_count: {
    type: Number,
    default: 0,
  },
});

const name = "UserMessages";
module.exports = models[name] || model(name, userMessages_Schema);
