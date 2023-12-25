let con;
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const invites = require('discord-invites13')
const mysql = require("mysql")
const DisTube = require("distube")
const { readdirSync } = require("fs")
const { join } = require("path")
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
partials: ["CHANNEL", "MESSAGE", "REACTIONS"],
allowedMentions: { parse: ['users', 'roles', 'everyone'], repliedUser: true } });
const fs = require('fs');
client.config = require(`./config`);
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.distube = new DisTube.default(client, { searchSongs: 10, emitNewSongOnly: true, nsfw: true })
try {
    con = mysql.createConnection(client.config.database)
    setTimeout(() => {
       console.log('MySQL Connected!')
    }, 6300);
} catch (e) {
    console.log(e)
};

        // Command Handler
        const categories = readdirSync(join(__dirname, `./`, `commands`));
        for (let category of categories) {
            const commands = readdirSync(join(__dirname, `./`, `commands/`, category));
            for (let command of commands) {
                let info = require(`./commands/${category}/${command}`);
                if (info.info.name) {
                    client.commands.set(info.info.name, info);
                } else {
                    console.log(`No help name or additional info found for ${command}`);
                    continue;
                }
                if (info.info.aliases[0]) {
                    try {
                        info.info.aliases.forEach(a => {
                            client.commands.set(a, info);
                        })
                    } catch(e) {
                        console.log(`An error occured when adding aliases for ${command}`);
                        continue;
                    }
                }
            }
        };

        // Event handler
        const events = readdirSync(join(__dirname, `./`, `events`));
        events.forEach(e => {
            const name = e.split('.')[0];
            const event = require(`./events/${e}`);
            client.on(name, event.bind(null, client, con));
            delete require.cache[require.resolve(`./events/${e}`)];
        });

client.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.login(client.config.token)