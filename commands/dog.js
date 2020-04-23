const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
  message.delete();

  const cat = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => json.message);

  const embed = new MessageEmbed()
    .setColor("#00ff82")
    .setImage(cat)
    .setFooter("Powered by 'https://dog.ceo/api/breeds/image/random'");
  message.channel.send(embed);
};
