const Discord = require("discord.js");
require("dotenv").config();
const helpembeds = require("./helpembeds");
const {getInsult} = require("./util");

const client = new Discord.Client();

(async () => {

    await client.login(process.env.TOKEN);

    client.once("ready",() => {
        console.log("its ready");
        
    });

    await client.user.setActivity("!insult",{type:"LISTENING"});

    client.on("message", async message => {
        if(message.content.includes("!insult")){
            const commands = message.content.split(" ");
            if(commands.length > 1){
                if(commands[1].toUpperCase() === "ME"){
    
                    let userid = message.author.id;
                    
                    userid = "<@!"+userid+">";
        
                    const insult = await getInsult();
        
                    message.channel.send( userid + " "+insult);
                }else if(commands[1].startsWith("<@")){
                    const id = commands[1];
                    let lang = commands[2] || "english";
        
                    const insult = await getInsult(lang);
                    if(insult.err){
                        message.channel.send(insult.err);
                    }else{
                        message.channel.send(id + " " +insult.insult);
                    }
                    
                }
                else if(commands[1].toUpperCase() == "HELP"){
                    message.channel.send(helpembeds);
                }
            }else{
                message.channel.send("This Will Help You");
                message.channel.send(helpembeds);
            }
        }
    });
})();