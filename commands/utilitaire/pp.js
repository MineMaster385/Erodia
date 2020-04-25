module.exports = (client, message) => {
  if (!message.guild) return;
  const user = message.mentions.users.first();
  if (user) {
    message.channel.send(`Voici la pp de ${user} : ${user.displayAvatarURL()}`);
  } else {
    message.channel.send(`Voici ta pp : ${message.author.displayAvatarURL()}`);
  }
};
