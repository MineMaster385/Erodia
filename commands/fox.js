const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
  message.delete();

  const fox = await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image);

  const embed = new MessageEmbed()
    .setColor("#00ff82")
    .setImage(fox)
    .setTimestamp()
    .setFooter("Powered by 'https://randomfox.ca/floof/'");
  message.channel.send(embed);
};
