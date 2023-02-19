import { Client, IntentsBitField, Partials } from "discord.js";
import WOK, { DefaultCommands } from "wokcommands";
import path from "path";
require("dotenv/config");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is Online.`);
  new WOK({
    client,
    commandsDir: path.join(__dirname, "commands"),

    mongoUri: process.env.MONGO_URI || "",

    disabledDefaultCommands: [
      DefaultCommands.ChannelCommand,
      DefaultCommands.CustomCommand,
      DefaultCommands.Prefix,
      DefaultCommands.RequiredPermissions,
      DefaultCommands.RequiredRoles,
      DefaultCommands.ToggleCommand,
    ],
  });
});

client.login(process.env.TOKEN);
