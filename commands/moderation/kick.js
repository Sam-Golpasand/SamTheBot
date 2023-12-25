    exports.run = async (message, args, cmd, client, Discord, con) => {

        let embed4 = new Discord.MessageEmbed()
        .setDescription('You do not have permission to use that command')
        .setColor(client.config.errorColorHex) 
        var reason = args.slice(1).join(" ");
      if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send({ embeds: [embed4] });

      let embed2 = new Discord.MessageEmbed()
      .setDescription(`Please include a reason with your message.`)
      .setColor(client.config.errorColorHex) 

        if(!args[1]) return message.channel.send({ embeds: [embed2] })

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(member) {


        
        const embed6 = new Discord.MessageEmbed()
            .setTitle(`You've been kicked`)
            .addFields(
                { name: `Enforcer:`, value: `${message.author.tag}` },
                { name: `Guild:`, value: `${message.guild.name}` },
                { name: `Reason:`, value: `${reason}` }
            )
            .setColor(`${client.config.kickColorHex}`)
            .setFooter(`${client.config.copyright}`);
        await member.send({ embeds: [embed6] }).catch(e => { });

        let logs = await client.channels.cache.get(client.config.kickLog)
        let embed2 = new Discord.MessageEmbed()
        .addFields(
            { name: `Enforcer:`, value: `${message.author.tag}` },
            { name: `Guild:`, value: `${message.guild.name}` },
            { name: `Reason:`, value: `${reason}` }
        )
        .setColor(client.config.kickColorHex) 
        logs.send({ embeds: [embed2] })

        member.kick(`${reason}`)

            let embed = new Discord.MessageEmbed()
            .setDescription(`**You have succesfully kicked:** <@${member.user.id}>\n**for:** ${reason}`)
            .setColor(client.config.colorHex)   

              
            message.channel.send({ embeds: [embed] })
        } else { 
        let embed3 = new Discord.MessageEmbed()
        .setDescription(`You couldn't kick that member`)
        .setColor(client.config.errorColorHex) 

        message.channel.send({ embeds: [embed3]})
        }
    }

    exports.info = {
      name: "kick",
      description: "Kicks a member of the discord",
      useAliases: false,
      aliases: []
  }