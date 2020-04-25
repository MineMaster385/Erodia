const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【💡】suggestions");
  if (!message.guild) return;
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if (!args) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`Suggestion de ${message.member.user.username}`)
    .setDescription(`**${args.join(" ")}**\nSi la suggestion est ajouté, un membre du staff le ferat savoir via l'emoji : ⭐`)
    .setTimestamp()
    .setFooter(`Sondage réalisé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  const msg = await channel.send(embed);

  await msg.react("✅");
  await msg.react("❌");

  message.delete();
};
