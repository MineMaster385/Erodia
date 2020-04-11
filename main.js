const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true });

client.login(TOKEN);

client.on("ready", () => {
  console.log(" ");
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`%help ┊ ${client.guilds.cache.size} serveurs ┊ ${client.users.cache.size} utilisateurs`, { type: "WATCHING" });
});

client.on("error", console.error);
client.on("warn", console.warn);
// client.on("debug", console.log);

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === "ping") msg.channel.send("Pong!");
  if (cmd === `${PREFIX}say`) {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return "Tu n'a pas les permission requise!";
    msg.delete();
    msg.channel.send(args.join(" "));
  }
  /* if (cmd === `${PREFIX}role`) {
    const role = msg.guild.roles.cache.find(r => r.name === args[0]);
    if (!msg.member.hasPermission("MANAGE_ROLES")) return "Tu n'a pas les permission requise!";
    if (!role) return "Ce rôle n'existe pas";
    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      msg.channel.send(`J'ai suprimé le rôle ${role} à ${msg.author}`);
    } else {
      msg.member.roles.add(role);
      msg.channel.send(`J'ai ajouté le rôle ${role} à ${msg.author}`);
    }
  }*/
});

// message de bienvenue
client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "test");
  channel.send(`Bienvenue ${member}, nous somme maintenant ${member.guild.memberCount}`);
});

// message d'aurevoir
client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "test");
  channel.send(`${member.user.username} nous à quitté, nous ne somme plus que ${member.guild.memberCount}`);
});

