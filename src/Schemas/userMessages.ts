import { Schema, model, models } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const userMessages = new Schema({
  _id: reqString,
  userId: reqString,
  userName: reqString,
  guildId: reqString,

  messageCount: {
    type: Number,
    default: 0,
  },
});

const name = "user-messages";
module.exports = models[name] || model(name, userMessages);
