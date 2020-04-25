module.exports = (client, message) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【🎟】ticket-logs");
  channel.send(`${message.member.user.username} a fermer un ticket`);
  message.delete();
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
  message.member.permissions.Remove(["VIEW_CHANNEL", "MANAGE_CHANNELS"])
    .then(console.log)
    .catch(console.error);
};
