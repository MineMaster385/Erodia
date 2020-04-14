const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "test");// si tu change le nom du channel met le nouveau nom ici
  if (!channel) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`**Bienvenue ${member}**`)// ici c'est pour ce qu'il y a en haut
    .setDescription(`Bienvenue ${member.user.username} sur **${member.guild.name}**.\n Tu est le ${member.guild.memberCount}ème utilisateur a rejoindre notre Discord !`)// pour modifier le message c'est ici
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`);
  channel.send(embed);
};
