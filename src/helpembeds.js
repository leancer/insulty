const Discord = require("discord.js");

const helpEmbed = new Discord.MessageEmbed();

helpEmbed.setColor("#0099ff")
.setTitle("Insulty Help")
.setThumbnail('https://dashboard.snapcraft.io/site_media/appmedia/2018/05/angry_1.png')
.setDescription('Find What can You do With Insulty')
.setFooter('Made by LEANCER');

module.exports = helpEmbed;