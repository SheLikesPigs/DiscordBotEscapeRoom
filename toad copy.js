/////////////////////////////////////////////////////////////////////////////////////////////
//BOT SETUP
/////////////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('ToadBot is online');
});

client.on('message', message => { // If a message is sent...

    /////////////////////////////////////////////////////////////////////////////////////////////
    //SET UP
    /////////////////////////////////////////////////////////////////////////////////////////////
    //SETUP VARIABLES
    let listOfUsers = [];
    const levelOneRoles = [message.guild.roles.cache.get("972283324288618547"), message.guild.roles.cache.get("972283392836132915"), message.guild.roles.cache.get("972283627536793641"), message.guild.roles.cache.get("972283733577191424")]
    let partGeneralTime = 0


    message.guild.members.cache.forEach(member => listOfUsers.push(member));
    let listOfPlayers = [];
    for (let i = listOfUsers.length - 1; i >= 0; i--) {
        if (!listOfUsers[i].user.bot) {
            listOfPlayers.push(listOfUsers[i])
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////
    //COMMAND SETUP
    /////////////////////////////////////////////////////////////////////////////////////////////
    const prefix = '?';
    if (!message.content.startsWith('?') && !message.content.startsWith('~')) return;
    const args = message.content.slice(prefix.length);
    let command = args.toLowerCase();

    /////////////////////////////////////////////////////////////////////////////////////////////
    //INTRO
    /////////////////////////////////////////////////////////////////////////////////////////////
    if (command == "startescaperoom" && message.author.username == "SheLikesPigs") {
        message.react("✅")
        message.channel.send("~Hello everyone and welcome to the Mario Party Escape Room!!")
    }

    if (command == "Here's How the Escape Room Works".toLowerCase() && message.author.bot) {

        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~Your goal is to work as a team to get through 3 levels in under an hour")
        }, partGeneralTime)


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~You will also be communicating and giving commands to me (Toad Bot) in order to go through the levels")
        }, partGeneralTime)


        partGeneralTime += 4000
        setTimeout(() => {
            message.channel.send("~All my commands I use start with '?'")
        }, partGeneralTime)
    }

    if (command == "hints will only be given at the 15, 30, and 45 minute marks".toLowerCase() && message.author.bot) {
        partGeneralTime = 0


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~<#972277269924040784> will always be open for you all to use")
        }, partGeneralTime)


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~You may put any useful information there (such as notes or things to keep in mind)")
        }, partGeneralTime)


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~__**Level Outline**__")
        }, partGeneralTime)


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Level One: Maze Mixup!")
        }, partGeneralTime)


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Level Two: Help Yoshi!")
        }, partGeneralTime)


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Final Level: Bowser Battle!")
        }, partGeneralTime)
    }

    if (command == ("ready").toLowerCase()) { // ADDING ROLES TO PLAYERS FOR LEVEL ONE
        message.react("✅")
        message.reply("Sending everyone to Level 1 in T-Minus 10 Seconds")
        const role = message.guild.roles.cache.get("972275866535079956");

        setTimeout(() => {
            message.guild.members.cache.forEach(member => member.roles.add(role));
        }, 10000)

        if (listOfPlayers.length == 1) {
            listOfPlayers[0].roles.add(levelOneRoles[0])
            listOfPlayers[0].roles.add(levelOneRoles[1])
            listOfPlayers[0].roles.add(levelOneRoles[2])
            listOfPlayers[0].roles.add(levelOneRoles[3])
        } else if (listOfPlayers.length == 2) {
            listOfPlayers[0].roles.add(levelOneRoles[0])
            listOfPlayers[0].roles.add(levelOneRoles[3])
            listOfPlayers[1].roles.add(levelOneRoles[2])
            listOfPlayers[1].roles.add(levelOneRoles[1])
        } else if (listOfPlayers.length == 3) {
            listOfPlayers[2].roles.add(levelOneRoles[0])
            listOfPlayers[0].roles.add(levelOneRoles[1])
            listOfPlayers[1].roles.add(levelOneRoles[2])
            listOfPlayers[2].roles.add(levelOneRoles[3])
        } else if (listOfPlayers.length > 3) {
            for (let i = 0; i < listOfPlayers.length; i++) {
                listOfPlayers[i].roles.add(levelOneRoles[i % levelOneRoles.length])
            }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////
    //LEVEL ONE
    /////////////////////////////////////////////////////////////////////////////////////////////

    let isInLevelOneFinalCommands = message.channel.name.toLowerCase() === 'level-one-final-commands'

    partGeneralTime = 0

    if (isInLevelOneFinalCommands && command == ("R4D4R4U6L7U2R8").toLowerCase()) { //CORRECT ANSWER
        message.react("✅")
        message.channel.send("~Congrats!! You finished Level 1!")


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Tell everyone that you finished this level :D")
        }, partGeneralTime)


        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~Sending everyone to Level 1 in T-Minus 10 Seconds")
        }, partGeneralTime)


        //MOVE TO NEXT LEVEL
        partGeneralTime += 10000
        setTimeout(() => {
            const role = message.guild.roles.cache.get("972276046726582332");
            message.guild.members.cache.forEach(member => member.roles.add(role));
            message.guild.members.cache.forEach(member => member.roles.remove(message.guild.roles.cache.get("972275866535079956")).catch(console.error));
        }, partGeneralTime)

        for (let i = 0; i < listOfPlayers.length; i++) {
            listOfPlayers[i].roles.remove(levelOneRoles[0]).catch(console.error);
            listOfPlayers[i].roles.remove(levelOneRoles[1]).catch(console.error);
            listOfPlayers[i].roles.remove(levelOneRoles[2]).catch(console.error);
            listOfPlayers[i].roles.remove(levelOneRoles[3]).catch(console.error);
        }

    } else if (isInLevelOneFinalCommands && !message.author.bot) { // WRONG ANSWER
        message.react("❌")
    }

    /////////////////////////////////////////////////////////////////////////////////////////////
    //LEVEL TWO
    /////////////////////////////////////////////////////////////////////////////////////////////
    if (command == "startleveltwo" && message.author.username == "SheLikesPigs") {
        partGeneralTime = 0
        message.react("✅")
        message.channel.send("~Hello everyone! Congrats on finishing Level 1!!")


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Now it's time to start Level 2")
        }, partGeneralTime)
    }

    if (command === "you see...".toLowerCase() && message.author.bot) {
        partGeneralTime = 0
        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Yoshi what did you do this time -_-")
        }, partGeneralTime)
    }

    let isInLevelTwoFinalCommands = message.channel.name.toLowerCase() === 'level-two-final-commands'

    if (isInLevelTwoFinalCommands && command == ("DINOS").toLowerCase()) {
        partGeneralTime = 0
        message.react("✅")
        message.channel.send("~Congrats!! You finished Level 2!")


        partGeneralTime += 3000
        setTimeout(() => {
            message.channel.send("~Tell everyone that you finished this level!")
        }, partGeneralTime)


        partGeneralTime += 2000
        setTimeout(() => {
            message.channel.send("~Sending everyone to the **FINAL LEVEL** in T-Minus 10 Seconds")
        }, partGeneralTime)


        partGeneralTime += 10000
        setTimeout(() => {
            const role = message.guild.roles.cache.get("972276093438529576");
            message.guild.members.cache.forEach(member => member.roles.add(role));
            message.guild.members.cache.forEach(member => member.roles.remove(message.guild.roles.cache.get("972276046726582332")).catch(console.error));
        }, partGeneralTime)

    } else if (isInLevelTwoFinalCommands && !message.author.bot) {
        message.react("❌")
    }

    partGeneralTime = 0
    if (command == "startfinallevel" && message.author.username == "SheLikesPigs") {
        message.react("✅")
        message.channel.send("~You did it!! You made it to The Final level!!")
    }

});


/////////////////////////////////////////////////////////////////////////////////////////////
//Connect to Server
/////////////////////////////////////////////////////////////////////////////////////////////
client.login('TOKEN');

