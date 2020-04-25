const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  message.delete();
  const channel = message.guild.channels.cache.find(ch => ch.name === "【🎟】ticket-logs");
  const embed = new MessageEmbed()
    .setColor("#ff0000")
    .addField("**Ouverture de ticket**", `${message.member.user.username} a ouvert un ticket : ${message.member.user.username}-ticket`)
    .setTimestamp();
  channel.send(embed);
  if (!message.guild) return;
  message.guild.channels.create(`${message.member.user.username} ticket`, {
    permissionOverwrites: [
      {
        id: "637711606158983185",
        deny: ["VIEW_CHANNEL"]
      },
      {
        id: message.member.id,
        allow: ["VIEW_CHANNEL"]
      },
      {
        id: "690595142150914088",
        allow: ["VIEW_CHANNEL", "MANAGE_CHANNELS"]
      }
    ]
  })
    .then(console.log)
    .catch(console.error);
};
  
// module.exports = (client, message) => {
//   message.channel.send("Cette commande est actuellement désactivé");
// };
