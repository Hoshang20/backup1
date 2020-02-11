const Discord = require('discord.js');  
const db = require('quick.db');  
const hastebin = require('hastebin-gen');  
const client = new Discord.Client();    
const Canvas = require('canvas');        
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();  
const jimp = require('jimp');   
const figlet = require('figlet'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` hoshang BOT IS READY`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

var prefix = "..";
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}

client.on('message', message => {
  if(message.content == prefix+"cvzero"){
    message.channel.send("╔═════ஜ۩۞۩ஜ═════╗ \n     Name: Hoshang Hassan \n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n             BORN:1998\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n           Lives: qaladza\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n       Name Pubg: Di1๏ZERO\n ╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n          ID Pubg: 5565537838\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n       Mode Mobile:pc+A6P\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n          Roles: Server Devloper\n╚═════ஜ۩۞۩ஜ═════╝",{files:["./pic/zero.jpg"]});
    
    
    
    
    
    
    
  }
});

client.on('message', message => {
              if(!message.channel.guild) return;

    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**Taybata Bo Aw Servaraya**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Maka Chawakam** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Hoshang Hassan";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**Atewet Chy Blawkaytawa**');message.channel.send(`**Takdi Away Blaw Kayawa** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Hoshang Hassan')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Dast Xosh Bet**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
// -say
  if (command === "بڵێ") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "em") {
    let say = new Discord.RichEmbed()
   
  
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/667822770314412035/676528954898907146/image0.png?width=314&height=559")
    message.channel.sendEmbed(say);
    message.delete();
    
  }
});





    
client.login("NjYzNDY4MzI4MjA3MTIyNDcy.XjxRLw.rHHs2c3nKg9z-1kQXXvedictYfc");