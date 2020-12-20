exports.run = (bot, msg) => {
  msg.channel.send('Ping!').then(s => {
    s.edit(`Pong! ${s.createdTimestamp - msg.createdTimestamp}ms`);
});
}
