module.exports = (client, message, args) => {
  const channel = message.guild.channels.cache.find(ch => ch.name === "【🎟】ticket-logs");
  channel.send(`${message.member.user.username} a rennomer un channel *${message.channel.name}* en *${args.join(" ")}*`);
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
  message.channel.setName(`${args.join(" ")}`)
    .then(console.log)
    .catch(console.error);
};
