// module.exports = (client, message, args) => {
//   if (!message.member.hasPermission("MANAGE_NICKNAMES")) return "Tu n'a pas les permission requise!";
//   const user = message.mentions.users.first();
//   if (user) {
//     user.setNickname(`${args}`);
//     message.channel.send(`${user.username} a bien été rennomer`);
//   } else {
//     message.reply("tu n'a pas mentionner l'utilisateur a renomer");
//   }
// };

module.exports = (client, message) => {
  message.channel.send("la commande est actuellement désactivé");
};
