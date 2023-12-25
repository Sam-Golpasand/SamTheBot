let i = 0;
const ms = require("ms")
const Discord = require('discord.js');
const nodebuddy = require('node-buddy')
const buddy = new nodebuddy(true, 'SamTheMan', 'hello')
const nodelogger = require('hyperz-nodelogger')
const axios = require("axios");
const chalk = require('chalk')
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = async (client, con, ready) =>{
    process.on('unhandledRejection', (err) => { 
        if(err !== "DiscordAPIError: Cannot send an empty message") {
            console.log(chalk.red(`\nFATAL ERROR: \n\n`, err.stack))
        }
    });

    setInterval(() => {
        con.ping()
    }, ms("25m"))

    client.guilds.cache.forEach(async g => {
        await con.query(`SELECT * FROM guilds WHERE guildid = "${g.id}"`, async (err, row) => {
            if(err) throw err;
            if(!row[0]) {
                await con.query(`INSERT INTO guilds (guildid, prefix) VALUES ("${g.id}", "-")`, async (err, row) => {})
            } 
        })
    })

    //Distube stuff
client.distube.on('error', (channel, error) => {
    console.error(error)
    channel.send({ content: `An error encoutered: ${error.slice(0, 1979)}` }).catch(e => {});
});


client.distube.on('playSong', (queue, song) => {
    const play = new Discord.MessageEmbed()
.setTitle(`**Started playing: **${song.name}`)
.setDescription(`**User:** ${song.user}\n**Song:** ${song.name} - ${song.formattedDuration}.`)
.setColor(client.config.musicColorHex)
    queue.textChannel.send({ embeds: [play]  }).catch(e => {});
});

client.distube.on("finish", queue => {
    const emptyQueue = new Discord.MessageEmbed()
    .setDescription(`"No more songs in queue."`)
    .setColor(client.config.musicColorHex)
    queue.textChannel.send({ embeds: [emptyQueue] }).catch(e => {});
});

client.distube.on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
});

client.distube.on("addSong", (queue, song) => {
    const addedQueue = new Discord.MessageEmbed()
    .setDescription(`${song.user} has added ${song.name} - ${song.formattedDuration} to the queue.`)
    .setColor(client.config.musicColorHex)
    queue.textChannel.send({ embeds: [addedQueue] }).catch(e => {});
});

client.distube.on("searchCancel", (message) => {
    const searchCancelled = new Discord.MessageEmbed()
    .setDescription("Searching Cancelled." )
    .setColor(client.config.musicColorHex)
    message.channel.send({ embeds: [searchCancelled] }).catch(e => {});
});

client.distube.on("searchNoResult", (message, query) => {
    const noResult = new Discord.MessageEmbed()
    .setDescription(`No result found for ${query}!` )
    .setColor(client.config.musicColorHex)
    message.channel.send({ embeds: [noResult] }).catch(e => {});
});

client.distube.on("searchResult", (message, results) => {
    const chooseSong = new Discord.MessageEmbed()
    .setDescription(`**Choose an option from below**\n${results.map((song, i) => `**${i + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*` )
    .setColor(client.config.musicColorHex)
    message.channel.send({ embeds: [chooseSong] }).catch(e => {
        console.log(e)
    });
});

client.distube.on("searchDone", (message, answer, query) => {});

client.distube.on("searchInvalidAnswer", (message, answer) => {
    message.channel.send({ content: `Invalid answer provided for search.` }).catch(e => {});
});

    setTimeout(() => {
        booter(client, axios) // Run the first round check here
    }, 2500)

    setInterval(() => {
        booter(client, axios)
    }, 3600000); // This will re-run the interval every hour (3.6m milliseconds)
    const logger = new nodelogger()
    // Entries: header, headerWidth, headerColor, body, backgroundColor, borderColor, borderStyle, fullBorders
    logger.hypelogger(`${client.config.loggerText}`, `${client.config.loggerWidth}`, `${client.config.loggerHeaderColor}`, `${client.config.loggerBody}`, `${client.config.loggerBackgroundColor}`, `${client.config.loggerBorderColor}`, `${client.config.loggerBorderStyle}`, `${client.config.loggerBorderStyle}`)
    changeStatus(client)
    const channel = client.channels.cache.get(client.config.voicechanneltojoin);
    if (!channel) return console.log("The voice channel does not exist (change config's voicechanneltojoin)!");
    let connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
    if(connection) {
        console.log("Successfully connected to the voice channel!")
    }
};    



async function changeStatus(client) {
    if (i >= client.config.presence.length) i = 0;
    await client.user.setPresence({
        activity: {
            name: client.config.presence[i].name,
            type: client.config.presence[i].type
        },
        status: client.config.presence[i].status
    });
    i++;
    setTimeout(() => {
        changeStatus(client);
    }, 10000)

};

async function booter(client, axios) {
    (async () => {
        let productId = 4 // This is the products ID on FaxStore, NOT on the license system
        let licenseKey = client.config.licenseKey; // This should be the users specific license key.
        let checkres = await axios({
            method: 'post',
            url: `https://license.samtheman.dev/api/checkitem/${productId}`, // Make sure that if your website has an SSL certificate, that you change this to be https, rather than http
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'User-Agent': '*',
                    'authorization': licenseKey,
                }
            });
            if(checkres.data.pass) {
                console.log(chalk.green(`${checkres.data.details}`)); // Logs authentication success
            } else {
                console.log(chalk.red(`${checkres.data.details}`)); // Logs authentication error
                process.exit() // Closes the app if it fails to authenticate
            }
    })();
}
