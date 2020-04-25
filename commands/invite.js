const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  if (!message.author.id === "530489758527389696") return undefined;
  if (!message.guild) return;
  const embed = new MessageEmbed()
    .setColor("#FF0000")
    .addFields(
      { name: "**Lien d'invitation**", value: "Voici mon lien d'invitation :wink: : https://discordapp.com/oauth2/authorize?client_id=589473866632396821&scope=bot&permissions=8" }
    )
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.username}`, `${message.author.displayAvatarURL()}`);
  message.channel.send(embed);
};
