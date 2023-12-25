
    exports.run = (message, args, cmd, client, Discord, con) => {
        let embed2 = new Discord.MessageEmbed()
        .setDescription('You do not have permission to use that command')
        .setColor(client.config.errorColorHex)
        if (!message.member.permissions.has('MUTE_MEMBERS')) return message.channel.send({embeds: [embed2]});
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === client.config.memberRoleName);
            let muteRole = message.guild.roles.cache.find(role => role.name === client.config.mutedRoleName);
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            let embed = new Discord.MessageEmbed()
            .setDescription(`<@${memberTarget.user.id}> has been unmuted`)
            .setColor(client.config.colorHex)
            message.channel.send({ embeds: [embed]});
        } else {
            let embed = new Discord.MessageEmbed()
            .setDescription('Cant find that member!')
            .setColor(client.config.errorColorHex)
            message.channel.send({ embeds: [embed]});
        }
    }

    exports.info = {
        name: "unmute",
        description: "Lets you unmute your muted members",
        useAliases: false,
        aliases: []
    }