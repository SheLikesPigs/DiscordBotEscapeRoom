const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('MarioBot is online');
});

client.on('message', message => {

/////////////////////////////////////////////////////////////////////////////////////////////
//COMMAND SETUP
/////////////////////////////////////////////////////////////////////////////////////////////
    const prefix = '~';
    if(!message.content.startsWith('~')) return;
    const args = message.content.slice(prefix.length)
    let command = args.toLowerCase();

    let partGeneralTime = 0
    if (command == "Hello everyone and welcome to the Mario Party Escape Room!!".toLowerCase() && message.author.bot) {
        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~I'm Mario and I'm here to help explain!")
        }, partGeneralTime)

        partGeneralTime += 2500
        setTimeout(() => {
            message.channel.send("~Here's How the Escape Room works")
        }, partGeneralTime)
    }

    partGeneralTime = 0
    if (command == "All my commands I use start with '?'".toLowerCase() && message.author.bot) {
        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~Here are some rules to guide you through this Escape Room!")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~You may use Google for this escape room (it's actually encouraged) but you may *not* ask for help from anyone outside of this group")
        }, partGeneralTime)

        partGeneralTime += 5000
        setTimeout(() => {
            message.channel.send("~Please be patient with this escape room, don't exploit bugs please")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~<@576864902711345164> is there answer any questions if you need clarification on something, however...")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~hints will only be given at the 15, 30, and 45 minute marks")
        }, partGeneralTime)
    }

    partGeneralTime = 0
    if (command == "Final Level: Bowser Battle!".toLowerCase() && message.author.bot) {
        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~Now's your chance to ask questions to <@576864902711345164>")
        }, partGeneralTime)

        partGeneralTime += 10000
        setTimeout(() => {
            message.channel.send("Once you are ready, type '?ready' and ToadBot will move you to **LEVEL ONE!!**")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~(Only one person needs to do this)")
        }, partGeneralTime)
    }

    partGeneralTime = 0
    if (command == "cuz Mario doesn't pay me enough".toLowerCase() && message.author.bot) {
        partGeneralTime += 1000
        setTimeout(() => {
            message.channel.send("~bruh")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~not true 😤")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~smh")
        }, partGeneralTime)
    }


});
/////////////////////////////////////////////////////////////////////////////////////////////
//Connect to Server
/////////////////////////////////////////////////////////////////////////////////////////////
client.login('TOKEN');

