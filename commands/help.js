const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  if (!message.guild) return;
  const embed = new MessageEmbed() // on crée l'embed
    .setColor("#FF0000")// couleur de l'embed
    .setTitle("Menu d'aide")// titre ---- on met '\' devant le ' pour qu'il ne le compte aps en apostrophe fermante
    .setDescription("Voici le menu d'aide de toutes les commandes du bot") // une desc
    .addFields(// on créé plein de fields
      { name: "**Prefix**", value: "`%`" },
      { name: "**Modération**", value: "`%ban` permet de bannir un utilisateur\n`%kick` permet de kick un utilisateur" }, // on met '\n' pour aller à la ligne
      { name: "**Utilitaire**", value: "`%ping` permet de tester le ping\n`%say` pour faire dire quelque chose au bot\n`%pdp` permet d'afficher la photo de profil d'un utilisateur\n`%invite` permet d'afficher le lien d'invitation du bot\n`%sinfo` permet de voir certaine information relative au serveur" },
      { name: "**Fun**", value: "`%cat` affiche une photo de chat\n`%dog` affiche une photo de chien\n`%fox` affiche une photo de renard" }
    )
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  message.channel.send(embed);
};
