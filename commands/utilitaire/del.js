const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【📄】logs");
  const embed = new MessageEmbed()
    .setColor("#ff0000")
    .addField("**Supression de salon**", `${message.member.user.username} à suprimer le channel : ${message.channel.name}`)
    .setTimestamp();
  channel.send(embed);
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
  message.channel.delete()
    .then(console.log)
    .catch(console.error);
};
