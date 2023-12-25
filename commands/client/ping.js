    exports.run = async (message, args, cmd, client, Discord, con) => {
        const pingEmbed = new Discord.MessageEmbed()
        .setDescription(`Latency is: **${Date.now() - message.createdTimestamp}ms.**`)
        .setTimestamp()
        .setColor(`${client.config.colorHex}`)
        .setFooter(`Pong!`);

    await message.channel.send({ embeds: [pingEmbed] }).catch(e => { if (client.config.debugMode) return console.log(e); });
    }

    exports.info = {
        name: "ping",
        description: "Pong",
        useAliases: false,
        aliases: []
    }