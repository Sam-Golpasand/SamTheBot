    exports.run = (message, args, cmd, client, Discord, con) => {
        message.delete() 
        if (client.config.suggestion) {

        const channel = message.guild.channels.cache.find(c => c.name === client.config.suggestionChannelName);
        let embed2 = new Discord.MessageEmbed()
        .setDescription('suggestions channel does not exist!')
        .setColor(client.config.errorColorHex) 
        if(!channel) return message.channel.send({ embeds: [embed2] });

        let messageArgs = args.join(" ");
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.colorHex)
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send({ embeds: [embed] }).then((msg) =>{
            msg.react('✅');
            msg.react('❌');

        }).catch((e)=>{
            throw e;
        });
    } else {
        message.channel.send({content: 'This module is disabled...'}).then(msg => {
            setTimeout (() =>{
                msg.delete ()
            }, 10000)
        })
        }
    }

    exports.info = {
        name: "suggestions",
        description: "Let your members suggest stuff for your server",
        useAliases: true,
        aliases: ['suggest', 'suggestion']
    }