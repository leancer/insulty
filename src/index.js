const Discord = require("discord.js");
const axios = require("axios");
require("dotenv").config();

const client = new Discord.Client();

client.once("ready",() => {
	console.log("its ready");
});

client.on("message", async message => {
	if(message.content.includes("!insult")){
        const arry = message.content.split(" ");
        if(arry.length > 1){
            if(arry[1] === "me"){

                let userid = message.author.id;
                
                userid = "<@!"+userid+">";
    
                const insult = await getInsult();
    
                message.channel.send( userid + " "+insult);
            }else if(arry[1].startsWith("<@!")){
                const id = arry[1];
    
                const insult = await getInsult();
    
                message.channel.send(id + " " +insult);
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