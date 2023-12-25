
    exports.run = async (message, args, cmd, client, Discord, con) => { 
        
        let embed2 = new Discord.MessageEmbed()
        .setDescription(`Please include a reason with your message.`)
        .setColor(client.config.errorColorHex) 

        if(!args[1]) return message.channel.send({ embeds: [embed2] })

          let embed = new Discord.MessageEmbed()
          .setDescription('You do not have permission to use that command')
          .setColor(client.config.errorColorHex) 

        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send({ embeds: [embed] })
        const member = message.mentions.users.first();
        const reason = args.slice(1).join(" ");
        if(member){
            const embed6 = new Discord.MessageEmbed()
            .setTitle(`You've been banned`)
            .addFields(
                { name: `Enforcer:`, value: `${message.author.tag}` },
                { name: `Guild:`, value: `${message.guild.name}` },
                { name: `Reason:`, value: `${reason}` }
            )
            .setColor(`${client.config.colorHex}`)
            .setFooter(`${client.config.copyright}`);
        await member.send({ embeds: [embed6] }).catch(e => { });

            setTimeout(async() => {
            await message.guild.members.ban(member.id, { reason: reason}).catch(e =>{
                console.log(e)
            })
        }, 1000)

            let embed = new Discord.MessageEmbed()
            .setDescription(`**User banned succesfully: ** ${member}\n**For:** ${reason}`)
            .setColor(client.config.colorHex) 
            message.channel.send({ embeds: [embed] })
            let logs = await client.channels.cache.get(client.config.banLog)
            let embed2 = new Discord.MessageEmbed()
            .addFields(
                { name: `Enforcer:`, value: `${message.author.tag}` },
                { name: `Guild:`, value: `${message.guild.name}` },
                { name: `Reason:`, value: `${reason}` }
            )
            .setColor(client.config.banColorHex) 
            logs.send({ embeds: [embed2] })
        } else {
            let embed = new Discord.MessageEmbed()
            .setDescription("You couldn't ban that member")
            .setColor('#FF0000') 
            message.channel.send({ embeds: [embed] })
        } 
    }


exports.info = {
    name: "ban",
    description: "Bans a member",
    useAliases: false,
    aliases: []
}