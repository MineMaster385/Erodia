module.exports = (client, message) => {
  if (!message.guild) return;
  const user = message.mentions.users.first();
  if (user) {
    message.reply(`Voici la pp de ${user.user.username} : ${user.displayAvatarURL()}`);
  } else {
    message.reply(`Voici ta pp : ${message.author.displayAvatarURL()}`);
  }
};
