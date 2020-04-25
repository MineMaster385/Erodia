const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  if (!message.guild) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Menu d'aide")
    .setDescription("Voici le menu d'aide des commandes du bot")
    .addFields(
      { name: "**Prefix**", value: `\`${client.PREFIX}\`` },
      { name: "**Utilitaire**", value: "`ping` permet de tester le ping\n`pp` permet d'afficher la photo de profil d'un utilisateur\n`sinfo` permet de voir certaine information relative au serveur\n`open` permet d'ouvrir un ticket\n`close` permet de fermer un ticket\n`suggest` permet de proposer une suggestion" },
      { name: "**Fun**", value: "`cat` affiche une photo de chat\n`dog` affiche une photo de chien\n`fox` affiche une photo de renard" }
    )
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  message.channel.send(embed);
};
