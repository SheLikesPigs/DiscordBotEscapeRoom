const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('BowserBot is online');
});

let numOfHa = 0

client.on('message', message => {
    /////////////////////////////////////////////////////////////////////////////////////////////
    //COMMAND SETUP
    /////////////////////////////////////////////////////////////////////////////////////////////
    const prefix = '~';
    if (!message.content.startsWith('~')) return;
    const args = message.content.slice(prefix.length)
    let command = args.toLowerCase();


    let partGeneralTime = 0
    if (command == "You did it!! You made it to The Final level!!".toLowerCase() && message.author.bot) {
        partGeneralTime += 5000
        setTimeout(() => {
            message.channel.send(">:)")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~MWAHAHA")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~You all have fallen *right* into my trap!")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~For your **FINAL LEVELL**")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~I will put you through suffering unimaginable!")
        }, partGeneralTime)

        partGeneralTime += 4000
        setTimeout(() => {
            message.channel.send("~Your final challenge is....")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~***CALCULUS***")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("https://cdn.discordapp.com/attachments/947278293437140992/972552942395748352/Screen_Shot_2022-05-07_at_12.37.45_PM.png")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~To input answers, type '~' and then your answer after. >:)")
        }, partGeneralTime)
    }


    let isInFinalLevel = message.channel.name.toLowerCase() === 'final-level'
    if (isInFinalLevel && (command == ("5.5") || command == ("11/2"))) {
        message.react("✅")
        message.channel.send("~NOOO YOU SOLVED IT D:<")

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Hmph fine... you finished the escape room. have the start now ig :(")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("https://tenor.com/view/toads-happy-mario-tada-star-gif-10173114")
        }, partGeneralTime)

    } else if (isInFinalLevel && !message.author.bot) {
        message.react("❌")

        numOfHa += 1
        Ha = ""

        for (let i = 0; i < numOfHa; i++) {
            Ha += "ha"
        }

        message.reply("WRONG! Mwaha" + Ha)
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////
//Connect to Server
/////////////////////////////////////////////////////////////////////////////////////////////
client.login('OTcyNTQ4ODE5ODU2MjYxMTcy.Ynaqqw.W_ZAaL_qKXbWLmtbBczfutSIe9Q');

