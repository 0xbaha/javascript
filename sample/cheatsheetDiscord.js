// Cheatsheet Discord.js v12

// Bot Username
client.user.username;

// Bot Ping
client.ws.ping;

// Bot Avatar URL
client.user.displayAvatarURL();
client.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 });

// Bot Uptime
var uptime_ms = process.uptime();
var d = Math.floor((uptime_ms % 31536000) / 86400);  // days
var h = Math.floor((uptime_ms % 86400) / 3600);      // hours
var m = Math.floor((uptime_ms % 3600) / 60);         // minutes
var s = Math.floor(uptime_ms % 60);                  // seconds
var uptime = (d > 0 ? d + " days, ":"") + (h > 0 ? h + " hours, ":"") + (m > 0 ? m + " minutes, ":"") + (s + " seconds");

// Bot Start/Stop Typing
msg.channel.startTyping();
msg.channel.stopTyping();

// NOTES:
// https://stackoverflow.com/questions/51234778/what-are-the-differences-between-bot-and-client

