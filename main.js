const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });

client.login("NTg5NDczODY2NjMyMzk2ODIx.XpG8Ww.DOUdw5UnadGggadNUBghZNSioJY");

client.on("ready", () => {
  console.log(" ");
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`%help ┊ ${client.guilds.cache.size} serveurs ┊ ${client.users.cache.size} utilisateurs`, { type: "WATCHING" });
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "voila") msg.channel.send("@everyone");
});

