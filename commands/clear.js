// module.exports = (client, message, args) => {
//   message.delete();
//   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande");
//   const count = parseInt(args[1], 10);
//   if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide");
//   if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100");
//   message.channel.bulkDelete(count + 1, true);
// };

module.exports = (client, message) => {
  message.channel.send("la commande est actuellement désactivé");
};
