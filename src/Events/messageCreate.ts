import { Event } from "../structures/Event";
const userMessages_Schema = require("../Schemas/userMessages");

/* Update Message Counter */
export default new Event("messageCreate", async (message) => {
  await userMessages_Schema.findOneAndUpdate(
    {
      _id: message.author.id,
      guildId: message.guild?.id,
    },
    {
      userId: message.author.id,
      userName: message.author.tag,
      $inc: {
        message_count: 1,
      },
    },
    {
      upsert: true,
      new: true,
    }
  );
});
