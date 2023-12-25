const { MessageActionRow, MessageButton, MessageEmbed } = require ("discord.js")
exports.run = (message, args, cmd, client, Discord, con) => {

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('helpPageLeft')
        .setLabel(`Back`)
        .setStyle(`PRIMARY`),
     )
            .addComponents(
                new MessageButton()
                .setCustomId('helpPageRight')
                .setLabel(`Next`)
                .setStyle(`PRIMARY`),
             )



            let helpembed = new Discord.MessageEmbed()
            .setColor(client.config.colorHex)
            .setTitle(`${client.config.yourServerName} Help Menu`)
            .setFooter("Page 1/6")
            .setDescription(`**Prefix:**\n**${client.config.prefix}**\n**About:**\nThis is an advanced multi-purpose bot coded in Discord.js v13 that does everything from Music to Tickets to Logs And a whole lot more. This bot is built to take all the other bots you have in your server and put them all into one. If you would like a bot like this for your own get it here https://samtheman.shop`)


             message.channel.send({ embeds: [helpembed], components: [row]})
            
    }

    exports.info = {
        name: "help",
        description: "A help command",
        useAliases: false,
        aliases: []
    }