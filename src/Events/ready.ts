import { Event } from "../structures/Event";

export default new Event("ready", (c) => {
  console.log(`✅ ${c.user.tag} is Online.`);
});
