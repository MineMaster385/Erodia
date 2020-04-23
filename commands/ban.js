module.exports = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission("BAN_MEMBERS")) return "Tu n'a pas les permission requise!";
  const user = message.mentions.users.first();

  if (user) {
    const member = message.guild.member(user);

    if (member) {
      member
        .ban({
          reason: `c\'est ${message.author.username} qui m'a dit de le ban pour : ${args.join(" ")}`
        })
        .then(() => {
          message.reply(`${user.tag} a bien été banni`);
        })
        .catch(err => {
          message.reply("Je n'ai pas reussi a bannir cet utilisateur.");

          console.error(err);
        });
    } else {
      message.reply("Utilisateur incorect");
    }
  } else {
    message.reply("Tu n'a pas mentionner l'utilisateur à bannir!");
  }
};
