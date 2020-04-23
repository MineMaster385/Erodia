const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "départ");
  if (!channel) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`**Aurevoir ${member.user.username}**`)
    .setDescription(`sniff :cry:, ${member.user.username} nous a quitté\n nous ne somme plus que ${member.guild.memberCount} !`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`);
  channel.send(embed);
};
