const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  message.delete();
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    const embed = new MessageEmbed()
      .setColor("#FF0000")
      .setTitle(`__${member.user.username}__`)
      .setDescription("Voici quelque information sur cet utilisateur")
      .setThumbnail(member.user.displayAvatarURL())
      .addField("**tag de l'utilisateur**", `${member}`, true)
      .addField("**surnom de l'utilisateur (si il en a un)**", `${member.displayName}`, true)
      .addField("**ID de l'utilisateur**", member.id, true)
      .addField("**Date ou l'utilisateur a rejoint le serveur**", member.joinedAt, true)
      .setTimestamp()
      .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
    message.channel.send(embed);
  } else {
    const embed = new MessageEmbed()
      .setColor("#FF0000")
      .setTitle(`__${message.member.user.username}__`)
      .setDescription("Voici quelque information sur cet utilisateur")
      .setThumbnail(message.member.user.displayAvatarURL())
      .addField("**tag de l'utilisateur**", `${message.member}`, true)
      .addField("**surnom de l'utilisateur (si il en a un)**", `${message.member.displayName}`, true)
      .addField("**ID de l'utilisateur**", message.member.id, true)
      .addField("**Date ou l'utilisateur a rejoint le serveur**", message.member.joinedAt, true)
      .setTimestamp()
      .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
    message.channel.send(embed);
  }
};
