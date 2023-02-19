import { CommandObject, CommandType } from "wokcommands";

export default {
  description: "Ping pong command",

  // Only create a slash command, not a legacy command
  // You can also use "CommandType.BOTH" to create a
  // legacy and slash command
  type: CommandType.SLASH,

  callback: () => {
    return {
      content: "Pong!",
      ephemeral: true,
    };
  },
} as CommandObject;
