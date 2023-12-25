    exports.run = (message, args, cmd, client, Discord, con) => {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({content: 'You do not have permission to use that command'});

        let embed2 = new Discord.MessageEmbed()
        .setDescription(`Please include a message for the embed.`)
        .setColor('#FF0000')

        if(!args[0]) return message.channel.send({ embeds: [embed2] }).then(msg => {
            setTimeout(() => {
                msg.delete().catch(e => { if (config.debugMode) return console.log(e); });
            }, 10000)
          }).catch(e => {});

          const embed = new Discord.MessageEmbed()
          .setColor(client.config.colorHex)
          .setDescription(args.join(" "))
          message.channel.send({ embeds: [embed] })
          message.delete().catch(e=> {})
    }
    exports.info = {
        name: "embed",
        description: "Makes your custom messages an embed",
        useAliases: false,
        aliases: []
    }