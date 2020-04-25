module.exports = (client, message) => {
  message.delete();
  const channel = message.guild.channels.cache.find(ch => ch.name === "【🎟】ticket-logs");
  channel.send(`${message.member.user.username} a crée un ticket`);
  if (!message.guild) return;
  message.guild.channels.create(`${message.member.user.username} ticket`, {
    permissionOverwrites: [
      {
        id: "637711606158983185",
        deny: ["VIEW_CHANNEL"]
      },
      {
        id: message.member.id,
        allow: ["VIEW_CHANNEL", "MANAGE_CHANNELS"]
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
