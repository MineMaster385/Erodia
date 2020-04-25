const { MessageEmbed } = require("discord.js");

module.exports = (client, message, args) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【📄】logs");
  message.delete();
  const embed = new MessageEmbed()
    .setColor("#ff0000")
    .addField("**Channel rennomer**", `${message.member.user.username} a rennomer un channel *${message.channel.name}* en *${args.join(" ")}*`)
    .setTimestamp();
  channel.send(embed);
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
  message.channel.setName(`${args.join(" ")}`)
    .then(console.log)
    .catch(console.error);
};
