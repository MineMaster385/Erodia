const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
  message.delete();

  const cat = await fetch("http://aws.random.cat/meow")
    .then(res => res.json())
    .then(json => json.file);

  const embed = new MessageEmbed()
    .setColor("#00ff82")
    .setImage(cat)
    .setFooter("Powered by 'http://aws.random.cat/meow'");
  message.channel.send(embed);
};
