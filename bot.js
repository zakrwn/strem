const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "zz";
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");
      message.channel.sendMessage(`**  ${argresult} st .. :white_check_mark:**`)
   client.user.setStatus("dnd")
});







client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
