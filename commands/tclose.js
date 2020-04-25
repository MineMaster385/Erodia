const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【🎟】ticket-logs");
  const embed = new MessageEmbed()
    .setColor("#ff0000")
    .addField("**Fermeture de ticket**", `${message.member.user.username} a fermer un ticket un ticket : ${message.channel.name}`)
    .setTimestamp();
  channel.send(embed);
  message.delete();
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
  message.channel.delete()
    .then(console.log)
    .catch(console.error);
};
