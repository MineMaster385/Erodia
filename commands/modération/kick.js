const { MessageEmbed } = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission("BAN_MEMBERS")) return "Tu n'a pas les permission requise!";
  const user = message.mentions.users.first();
  const channel = message.guild.channels.cache.find(ch => ch.name === "【📄】logs");


  if (user) {
    const member = message.guild.member(user);

    if (member) {
      member
        .kick(`c\'est ${message.member.username} qui m'a dit de le kick pour ${args.join(" ")}`)
        .then(() => {
          const embed = new MessageEmbed()
            .setColor("#ff0000")
            .addField(`${message.member.user.username} à banni ${user.users.username}`)
            .setTimestamp();
          message.reply(`${user.tag} a bien été expulser.`);
          channel.send(embed);
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
