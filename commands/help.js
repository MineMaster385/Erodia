const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  if (!message.guild) return;
  const embed = new MessageEmbed() // on crée l'embed
    .setColor("#FF0000")// couleur de l'embed
    .setTitle("Menu d'aide")// titre ---- on met '\' devant le ' pour qu'il ne le compte aps en apostrophe fermante
    .setDescription("Voici le menu d'aide de toutes les commandes du bot") // une desc
    .addFields(// on créé plein de fields
      { name: "**Prefix**", value: "%" },
      { name: "**Modération**", value: "`%ban` Permet de bannir un utilisateur\n`%kick` Permet de kick un utilisateur" }, // on met '\n' pour aller à la ligne
      { name: "**Utilitaire**", value: "`%ping` Permet de tester le ping\n`%say` Pour faire dire quelque chose au bot\n`%pdp` Permet d'afficher la photo de profil d'un utilisateur\n`%invite` Permet d'afficher le lien d'invitation du bot\n`%sinfo` Permet de voir certaine information relative au serveur" }
    )
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`); // ajoute un footer
  message.channel.send(embed);
};
