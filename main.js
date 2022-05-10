require("dotenv").config();

const { Client, Intents} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const mensagens = [
    "Mensagem 1",
    "Mensagem 2",
    "Mensagem 3",
];

client.on("ready", () => {
    console.log("Logou!");
});

client.on("messageCreate", msg => {
    // Id do Canal
    if (msg.channelId != '956557657911750716') return;
    if (msg.author.bot) return;
    
    const conteudo = msg.content.toUpperCase();
    if (conteudo.includes('BOM DIA') || conteudo.includes('BOA TARDE') || conteudo.includes('BOA NOITE')) {
        const resposta = mensagens[Math.floor(Math.random() * mensagens.length)];
        msg.reply(resposta);
    }
});

// Token Bot
client.login(process.env.TOKEN_BOT);
