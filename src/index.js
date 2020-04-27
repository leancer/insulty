const Discord = require("discord.js");
const axios = require("axios");
require("dotenv").config();
const http = require("http");

const client = new Discord.Client();

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/plain"
    });
        res.write("Hey");
        res.end();
    }).listen(4000);

client.once("ready",() => {
	console.log("its ready");
});

client.on("message", async message => {
	if(message.content.includes("!insult")){
        const arry = message.content.split(" ");
        
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
	}
});

client.login(process.env.TOKEN);

const getInsult = async () => {
    const res = await axios.get("https://insult.mattbas.org/api/insult.json?who=");
    const {insult} = res.data;
    return insult;
};