const Discord = require('discord.js');
const bot = new Discord.Client();
const async = require('async');
const login = require("./config/login.json");
const fs = require("fs");

bot.on('error', console.error);

bot.on('ready', () => {
    console.log(`${bot.user.tag} is now Online!`);
    bot.user.setActivity("Fortnite");
    bot.user.setStatus("dnd");
});

bot.on('message', async msg => {
    let prefix = ".";
    let args = msg.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    try {
        delete require.cache[require.resolve(`./commands/${cmd}.js`)]
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, msg, args);
        console.log(`Successfully ran ${cmd}`)
    } catch (e) {
        console.log(e.stack);
        console.log(`Failed to run ${cmd}`);
    }
});


bot.login(login.token);