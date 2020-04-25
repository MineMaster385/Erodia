module.exports = (client, message) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【📄】logs");
  channel.send(`${message.member.user.username} a suprimer *${message.channel.name}*`);
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
  message.channel.delete()
    .then(console.log)
    .catch(console.error);
};
