module.exports = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission("BAN_MEMBERS")) return "Tu n'a pas les permission requise!";
  const user = message.mentions.users.first();

  if (user) {
    const member = message.guild.member(user);

    if (member) {
      member
        .kick(`c\'est ${message.author.username} qui m'a dit de le kick pour ${args.join(" ")}`)
        .then(() => {
          message.reply(`${user.tag} a bien été expulser.`);
        })
        .catch(err => {
          message.reply("Je n'ai pas reussi a éxpulser ce membre.");

          console.error(err);
        });
    } else {
      message.reply("Nom d'utilisateur incorect");
    }
  } else {
    message.reply("Tu n'a pas mentionner l'utilisateur a éxpulser!");
  }
};
