    exports.run = (message, args, cmd, client, Discord, con) => {
        if (client.config.website) {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.colorHex)
            .setDescription(client.config.websiteLink)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        
            message.channel.send(embed);
            
        } else {
        message.channel.send({ content: "This module/command is disabled..." })
    }
    } 

    exports.info = {
        name: "website",
        description: "Shows your website",
        useAliases: true,
        aliases: ['site']
    }