const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.PREFIX = PREFIX;
client.commands = new Collection();

client.commands.set("say", require("./commands/modération/say.js"));
client.commands.set("ping", require("./commands/utilitaire/ping.js"));
client.commands.set("sinfo", require("./commands/utilitaire/sinfo.js"));
client.commands.set("help", require("./commands/utilitaire/help.js"));
client.commands.set("pp", require("./commands/utilitaire/pp.js"));
client.commands.set("nick", require("./commands/modération/nick.js"));
client.commands.set("clear", require("./commands/modération/clear.js"));
client.commands.set("ban", require("./commands/modération/ban.js"));
client.commands.set("kick", require("./commands/modération/kick.js"));
client.commands.set("cat", require("./commands/fun/cat.js"));
client.commands.set("dog", require("./commands/fun/dog.js"));
client.commands.set("fox", require("./commands/fun/fox.js"));
client.commands.set("invite", require("./commands/mmaster/invite.js"));
client.commands.set("eval", require("./commands/mmaster/eval.js"));
client.commands.set("open", require("./commands/utilitaire/open.js"));
client.commands.set("close", require("./commands/utilitaire/close.js"));
client.commands.set("rname", require("./commands/utilitaire/rname.js"));
client.commands.set("shelp", require("./commands/utilitaire/shelp.js"));
client.commands.set("del", require("./commands/utilitaire/del.js"));
client.commands.set("poll", require("./commands/utilitaire/poll.js"));
client.commands.set("suggest", require("./commands/utilitaire/suggest.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", message => require("./events/message.js")(client, message));
// client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
// client.on("guildMemberRemove", member => require("./events/guildMemberRemove.js")(client, member));

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
