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
    if (command === "Now it's time to start Level 2".toLowerCase() && message.author.bot) {
        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~H i  g u y s")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~I'm in a bit of a *problem* 😅")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~you see...")
        }, partGeneralTime)
    }


    partGeneralTime = 0
    if (command === "Yoshi what did you do this time -_-".toLowerCase() && message.author.bot) {
        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~umm...")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~The IRS (Important and Reasonable Shyguy) came to collect my taxes")
        }, partGeneralTime)

        partGeneralTime += 4000
        setTimeout(() => {
            message.channel.send("~and I *tried* to pay my taxes")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~except I didn't have enough")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~cuz Mario doesn't pay me enough")
        }, partGeneralTime)
    }

    partGeneralTime = 0
    if (command == "smh".toLowerCase() && message.author.bot) {
        partGeneralTime += 1000
        setTimeout(() => {
            message.channel.send("~*anyways*")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("I may or may not have accidently committed tax fraud!")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~so now I'm stuck in Shy Guy's prison :(")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~However")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~There is a 5 letter password that you can enter in <#972536991071756318> that can get me out of this prison")
        }, partGeneralTime)

        partGeneralTime += 4000
        setTimeout(() => {
            message.channel.send("~And it will also move you to the **Final Level**")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~**__How Level Two Works__**")
        }, partGeneralTime)

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~<#972382712470065223>, <#972383382535274496>, <#972384225514897438>, <#972384390460080188>, <#972384748708175932> all have challeneges that give you **1 letter and 1 color**")
        }, partGeneralTime)

        partGeneralTime += 10000
        setTimeout(() => {
            message.channel.send("~Type your 5 letter guesses in <#972536991071756318> to ToadBot (ex: ?TAXES)")
        }, partGeneralTime)

        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Remember you *may* use Google, but don't ask for help from anyone outside this group. You can ask for clarification from <@576864902711345164> too")
        }, partGeneralTime)

        partGeneralTime += 5000
        setTimeout(() => {
            message.channel.send("~GOOD LUCK!! help me out of here plz 🥹")
        }, partGeneralTime)
    }

});
/////////////////////////////////////////////////////////////////////////////////////////////
//Connect to Server
/////////////////////////////////////////////////////////////////////////////////////////////
client.login('TOKEN');

