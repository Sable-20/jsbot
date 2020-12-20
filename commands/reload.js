exports.run = (bot, msg, args) => {
  const Discord = require('discord.js');
  if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("This requires Administrator")

  try {
    delete require.cache[require.resolve(`./${args[0]}.js`)]
  } catch (e) {
    return msg.channel.send(`Unable to reload - ${args[0]}`)
  }
  const embed = new Discord.MessageEmbed()
  .setColor("#8A2BE2")
  .setTitle(`Successfully Reloaded - ${args[0]}`)

  msg.channel.send(embed)
}
