module.exports = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return "Tu ne peut pas faire ça";
  if (!message.member.hasPermission("MENTION_EVERYONE")) return "Tu ne peut pas faire ça";
  message.delete();
  message.channel.send(args.join(" "));
};
