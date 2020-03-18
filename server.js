const express = require("express");
const app = express(); 
const fs = require("fs"); 
const moment = require("moment"); 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
const http = require('http');

var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Ping Received.`);
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end(" BOT BY Hoshang hassan")
});


setInterval(() => {
  http.get(process.env.uptime);
}, 280000);
const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "..";
const di1 = [
  "Di1๏UP", 
  "Di1๏ZERO UP",
  "Di1๏ASMAR UP",
  "Di1๏MIRA UP",
  "Di1๏MONSTER UP",
  "Di1๏BaReZ UP",
    ];
bot.on("ready", () => {
console.log("Bot is ready!")


setInterval(() => {
        const index = Math.floor(Math.random() * (di1.length - 1) + 1); 
        bot.user.setActivity(di1[index]); 
    }, 10000);
});









bot.on("message", message => {
  if (message.content == prefix + "cvzero") {
    message.channel.send(
      "╔═════ஜ۩۞۩ஜ═════╗ \n     Name: Hoshang Hassan \n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n             BORN:1998\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n           Lives: qaladza\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n       Name Pubg: Di1๏ZERO\n ╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n          ID Pubg: 5565537838\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n       Mode Mobile:pc+A6P\n╚═════ஜ۩۞۩ஜ═════╝\n╔═════ஜ۩۞۩ஜ═════╗\n          Roles: Server Devloper\n╚═════ஜ۩۞۩ஜ═════╝",
      { files: ["./pic/zero.jpg"] }
    );
  }
});

bot.on("message", message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "bc")) {
    if (!message.channel.guild)
      return message.channel
        .send("**Taybata Bo Aw Servaraya**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**Maka Chawakam** `ADMINISTRATOR`");
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(2 + prefix.length);
    let copy = "Hoshang Hassan";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply("**Atewet Chy Blawkaytawa**");
    message.channel
      .send(`**Takdi Away Blaw Kayawa** \` ${args}\``)
      .then(msg => {
        msg
          .react("✅")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));

        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.channel
            .send(
              `☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`
            )
          message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle("Hoshang Hassan")
              .addField("Server", message.guild.name)
              .addField("Sender", message.author.username)
              .addField("Message", args)
              .setThumbnail(message.author.avatarURL)
              .setFooter(copy, bot.user.avatarURL);
            m.send({ embed: bc });
            msg.delete();
          });
        });
        reaction2.on("collect", r => {
          message.channel.send(`**Dast Xosh Bet**`).then(m => m.delete(5000));
          msg.delete();
        });
      });
  }
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  // -say
  if (command === "say") {
    message.delete();
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }

  if (command == "em") {
    let say = new Discord.RichEmbed()

      .setDescription(args.join("  "))
      .setColor("RANDOM")
      .setImage(
        "https://media.discordapp.net/attachments/667822770314412035/676528954898907146/image0.png?width=314&height=559"
      );
    message.channel.sendEmbed(say);
    message.delete();
  }
});

bot.on('message', message => {
    if(message.content == ('id')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['https://cdn.discordapp.com/attachments/663481707672109076/689893009432510582/id1.png','https://cdn.discordapp.com/attachments/663481707672109076/689893023458656346/id3.png','https://cdn.discordapp.com/attachments/663481707672109076/689893024448118905/id5.png','https://cdn.discordapp.com/attachments/663481707672109076/689893028772577423/id4.png','https://cdn.discordapp.com/attachments/663481707672109076/689893030261686360/id2.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'Idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'Offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Dont Play" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });


    
bot.login(process.env.TOKEN);