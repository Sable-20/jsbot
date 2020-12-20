exports.run = (bot, msg, args) => {
  const Discord = require('discord.js');
     var embed = new Discord.MessageEmbed()
       .setTitle("Our Website")
       .setDescription("https://myriad.gg", "")
       //.setFooter("Myriad")
       .setColor("#8A2BE2")
     msg.channel.send(embed)

}
