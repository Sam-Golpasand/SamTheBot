module.exports = async (client, con, guildMember) => {
    const altprev = require('discord-altprev')
    const Discord = require('discord.js');
    const police = new altprev('30d', 'kick', true) // If the account is 30 days or under, they will be kicked

    if(client.config.newUserRoleId != "") {
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.id === client.config.newUserRoleId);
        await guildMember.roles.add(welcomeRole);
    }

    let embed = new Discord.MessageEmbed()
    .setTitle(`Welcome **${guildMember.user.tag}**`)
    .setFooter(client.config.copyright)
    .setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
    .setDescription(`**<@${member.user.id}>** Joined. \nUsing invite code **${invite.code}** from **<@${inviter.id}>.** \nInvite was used **${invite.uses}** times since its creation.`)
    .setColor(client.config.welcomeMessageColorHex)
    
    member.guild.channels.cache.get(client.config.welcomeChannelId).send({ embeds: [embed]})

}
