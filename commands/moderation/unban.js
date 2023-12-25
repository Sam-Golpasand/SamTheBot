
    exports.run = (message, args, cmd, client, Discord, con) => {

            let embed = new Discord.MessageEmbed()
            .setDescription('You do not have permission to use that command')
            .setColor(client.config.errorColorHex) 
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send({ embeds: [embed]});
       
        if(!isNaN(args[0])){
            message.guild.members.unban(args[0]).catch(e =>{
                console.log(e)
            })
            let embed = new Discord.MessageEmbed()
            .setDescription(`**You have succesfully unbanned:** <@${args[0]}>`)
            .setColor(client.config.colorHex) 
            message.channel.send({ embeds: [embed]})
        } else {
            let embed = new Discord.MessageEmbed()
            .setDescription("You couldn't unban that member")
            .setColor(client.config.errorColorHex) 
            message.channel.send({ embeds: [embed]})
        }
    }

    exports.info = {
        name: "unban",
        description: "Unbans members with their ID",
        useAliases: false,
        aliases: []
    }