const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.PREFIX = PREFIX;

client.commands = new Collection();
client.commands.set("say", require("./commands/say.js"));
client.commands.set("ping", require("./commands/ping.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));
client.commands.set("help", require("./commands/help.js"));
client.commands.set("pp", require("./commands/avatar.js"));
client.commands.set("nick", require("./commands/nick.js"));
client.commands.set("clear", require("./commands/clear.js"));
client.commands.set("ban", require("./commands/ban.js"));
client.commands.set("kick", require("./commands/kick.js"));
client.commands.set("cat", require("./commands/cat.js"));
client.commands.set("dog", require("./commands/dog.js"));
client.commands.set("fox", require("./commands/fox.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", message => require("./events/message.js")(client, message));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildMemberRemove", member => require("./events/guildMemberRemove.js")(client, member));

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
