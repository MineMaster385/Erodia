const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  if (!message.guild) return;
  if (!message.member.hasPermission("VIEW_AUDIT_LOG"));
  const embed = new MessageEmbed() // on crée l'embed
    .setColor("#FF0000")// couleur de l'embed
    .setTitle("Menu d'aide du staff")// titre ---- on met '\' devant le ' pour qu'il ne le compte aps en apostrophe fermante
    .setDescription("Voici le menu d'aide de toutes les commandes du bot") // une desc
    .addFields(// on créé plein de fields
      { name: "**Prefix**", value: `\`${client.PREFIX}\`` },
      { name: "**Modération**", value: "`ban` permet de bannir un utilisateur\n`kick` permet de kick un utilisateur\n`usinfo` permet de voir certaine information par rapport a un utilisateur" }, // on met '\n' pour aller à la ligne
      { name: "**Utilitaire**", value: "`ping` permet de tester le ping\n`say` pour faire dire quelque chose au bot\n`pp` permet d'afficher la photo de profil d'un utilisateur\n`sinfo` permet de voir certaine information relative au serveur\n`open` permet d'ouvrir un ticket\n`close` permet de fermer un ticket\n`rname` pour rennomer un channel\n`del` permet de suprimer un channel\n`poll` pour crée un sondage (répondre par oui ou non)\n`suggest` permet de faire une suggestion" },
      { name: "**Fun**", value: "`cat` affiche une photo de chat\n`dog` affiche une photo de chien\n`fox` affiche une photo de renard" }
    )
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  message.channel.send(embed);
};
