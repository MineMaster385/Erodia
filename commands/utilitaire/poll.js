const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  if (!message.guild) return;
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if (!args) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle("C'est l'heure du sondage")
    .setDescription(`${args.join(" ")}`)
    .setTimestamp()
    .setFooter(`Sondage réalisé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  const msg = await message.channel.send(embed);

  await msg.react("✅");
  await msg.react("❌");

  message.delete();
};
