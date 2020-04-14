const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  message.delete();
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`__${message.guild.name}__`)
    .setDescription("Voici quelque information sur ce serveur")
    .setThumbnail(message.guild.iconURL)
    .addField("**Propriétaire du serveur**", `${message.guild.owner}`, true)
    .addField("**ID du serveur**", message.guild.id, true)
    .addField("**Région du serveur**", message.guild.region, true)
    .addField("**Date de création du serveur**", message.guild.createdAt, true)
    .addField("**Nombre de membre**", `${message.guild.memberCount}`, true)
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  message.channel.send(embed);
};
