const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true });

client.login(TOKEN);

client.on("ready", () => {
  console.log(" ");
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`%help ┊ ${client.guilds.cache.size} serveurs ┊ ${client.users.cache.size} utilisateurs`, { type: "WATCHING" });
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("Pong!");
});

