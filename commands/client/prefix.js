exports.run = async (message, args, cmd, client, Discord, con) => {


    if (message.guild.id === `${client.config.yourServerId}`) {

        if (client.config.deleteCommands) message.delete().catch(e => { if (client.config.debugmode) return console.log(e); });

        const perms = client.config.permissions_module.moderation;
        const embed = new Discord.MessageEmbed()
            .setDescription("You don't have permission to use this command...")
            .setColor(`${client.config.colorHex}`)
            .setFooter(`${client.config.copyright}`);
        if (!message.member.roles.cache.some(h => perms.includes(h.id))) return message.channel.send({ embeds: [embed] }).catch(e => { if (client.config.debugmode) return console.log(e); }).then(msg => {
            setTimeout(() => {
                msg.delete().catch(e => { if (client.config.debugmode) return console.log(e); });
            }, 10000)
        });

        const embed2 = new Discord.MessageEmbed()
            .setDescription("Please include a new prefix in your message...")
            .setColor(`${client.config.colorHex}`)
            .setFooter(`${client.config.copyright}`);
        if (!args[0]) return message.channel.send({ embeds: [embed2] }).catch(e => { if (client.config.debugmode) return console.log(e); }).then(msg => {
            setTimeout(() => {
                msg.delete().catch(e => { if (client.config.debugmode) return console.log(e); });
            }, 10000)
        });

        const embed3 = new Discord.MessageEmbed()
            .setDescription("You cannot have a space in your prefix...")
            .setColor(`${client.config.colorHex}`)
            .setFooter(`${client.config.copyright}`);
        if (args[1]) return message.channel.send({ embeds: [embed3] }).catch(e => { if (client.config.debugmode) return console.log(e); }).then(msg => {
            setTimeout(() => {
                msg.delete().catch(e => { if (client.config.debugmode) return console.log(e); });
            },10000)
        });

        await con.query(`UPDATE guilds SET prefix='${args[0]}' WHERE guildid='${message.guild.id}'`, async (err, row) => {
            if (err) return console.log(err);
        });

        const embed4 = new Discord.MessageEmbed()
            .setDescription(`Your guilds prefix has been updated to \`${args[0]}\``)
            .setColor(`${client.config.colorHex}`)
            .setFooter(`${client.config.copyright}`);
        await message.channel.send({ embeds: [embed4] }).catch(e => { if (client.config.debugmode) return console.log(e); });
        }
    }

exports.info = {
    name: "prefix",
    description: "change prefix",
    useAliases: false,
    aliases: []
}