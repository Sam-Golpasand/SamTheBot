const { Client } = require('discord.js');
const ms = require('ms');

    exports.run = (message, args, cmd, client, Discord, con) => {
        const target = message.mentions.users.first();
        if (target) {
            if (!message.member.permissions.has('MUTE_MEMBERS')) return message.channel.send('You do not have permission to use that command');
            let mainRole = message.guild.roles.cache.find(role => role.name === client.config.memberRoleName);
            let muteRole = message.guild.roles.cache.find(role => role.name === client.config.mutedRoleName);
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                let embed = new Discord.MessageEmbed()
                .setDescription(`<@${memberTarget.user.id}> has been muted`)
                .setColor(client.config.colorHex)
                message.channel.send({ embeds: [embed]});
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${memberTarget.user.id}> has been muted for:** ${ms(ms(args[1]))}`)
            .setColor(client.config.colorHex)
            message.channel.send({ embeds: [embed]});
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            let embed = new Discord.MessageEmbed()
            .setDescription('Cant find that member!')
            .setColor(client.config.errorColorHex)
            message.channel.send({ embeds: [embed]});
        }
    }

    exports.info = {
        name: "mute",
        description: "Mutes members",
        useAliases: false,
        aliases: []
    }