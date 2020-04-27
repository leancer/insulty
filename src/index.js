const Discord = require("discord.js");
const axios = require("axios");
require("dotenv").config();

const helpembeds = require("./helpembeds");
const client = new Discord.Client();

client.once("ready",() => {
	console.log("its ready");
});

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
                
    
                const insult = await getInsult();
    
                message.channel.send(id + " " +insult);
            }else if(commands[1].toUpperCase() == "HELP"){
                message.channel.send(helpembeds);
            }
        }else{
            message.channel.send("Currently in Early stage..");
        }
	}
});

client.login(process.env.TOKEN);

const getInsult = async () => {
    const res = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json");
    const {insult} = res.data;
    return insult;
};