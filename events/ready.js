module.exports = client => {
  console.log(" ");
  console.log("Connecté en tant que : " + client.user.tag);
  client.user.setActivity(`${client.PREFIX}help ┊ Bot crée par ๑۩ [ ๓เภє๓ครՇєг385 ] ۩๑`, { type: "WATCHING" });
};
