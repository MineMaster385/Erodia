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

// ping
client.on("message", msg => {
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (msg.author.bot) return;
  if (cmd === "ping") msg.channel.send("Pong!");
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === "say") {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return "Tu n'a pas les permission requise!";
    msg.delete();
    msg.channel.send(args.join(" "));
  }
  if (cmd === "sinfo") {
    msg.delete();
    const embed = new Discord.MessageEmbed() // on crée l'embed
      .setColor("#FF0000")// couleur de l'embed
      .setTitle(`__${msg.guild.name}__`)// titre ---- on met '\' devant le ' pour qu'il ne le compte aps en apostrophe fermante
      .setDescription("Voici quelque information sur ce serveur")
      .setThumbnail(msg.guild.iconURL)
      .addField("**Propriétaire du serveur**", `${msg.guild.owner}`, true)
      .addField("**ID du serveur**", msg.guild.id, true)
      .addField("**Région du serveur**", msg.guild.region, true)
      .addField("**Date de création du serveur**", msg.guild.createdAt, true)
      .addField("**Nombre de membre**", `${msg.guild.memberCount}`, true)
      .setTimestamp()
      .setFooter(`Demandé par ${msg.author.username}`, `${msg.author.displayAvatarURL()}`); // ajoute un footer
    msg.channel.send(embed);
  }
});

// message de bienvenue
client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "test");// si tu change le nom du channel met le nouveau nom ici
  if (!channel) return;
  const embed = new Discord.MessageEmbed()
	  .setColor("#FF0000")
    .setTitle(`**Bienvenue ${member}**`)// ici c'est pour ce qu'il y a en haut
    .setDescription(`Bienvenue ${member.user.username} sur **${member.guild.name}**.\n Tu est le ${member.guild.memberCount}ème utilisateur a rejoindre notre Discord !`)// pour modifier le message c'est ici
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`);
  channel.send(embed);
});

// message d'aurevoir
client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "test");// si tu change le nom du channel met le nouveau nom ici
  if (!channel) return;
  const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`**Aurevoir ${member.user.username}**`)// ici c'est pour ce qu'il y a en haut
    .setDescription(`${member.user.username} nous a quitté :cry:.\n nous ne somme plus que ${member.guild.memberCount} !`)// pour modifier le message c'est ici
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`);
  channel.send(embed);
});

