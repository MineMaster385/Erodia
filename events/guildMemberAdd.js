const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "arrivé");
  if (!channel) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`**Bienvenue ${member.user.username}**`)
    .setDescription(`Bienvenue ${member.user.username} sur **${member.guild.name}**.\n Tu est le ${member.guild.memberCount}ème utilisateur a rejoindre notre Discord !`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`);
  channel.send(embed);
};
