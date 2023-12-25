const moment = require('moment')

exports.run = async (message, args, cmd, client, Discord, con) => {
    const target =  message.mentions.users.first() || message.author;
    const member = message.guild.members.cache.get(target.id)

    let embed2 = new Discord.MessageEmbed()
    .setColor(client.config.colorhex)
    .setTitle(`User: ${target.tag}`)
    .setTimestamp()
    .setFooter(`${client.config.copyright}, Requested by ${message.author.username}`)
    .setAuthor(target.username, target.displayAvatarURL({ dynamic: true }))
    .setThumbnail(target.displayAvatarURL({dynamic: true}))
    .addFields(
        { name: '**Tag:**', value: `${target.tag}`, inline: true},
        { name: '**ID:**', value: `${target.id}\n`, inline: true},
        { name: '**Nickname:**', value: `${target.displayName}`, inline: false},
        { name: '**Joined Server:**', value: `${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`},
        { name: '**Joined Discord:**', value: `${moment(target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(target.createdAt).startOf('day').fromNow()}`},
    )


    message.channel.send({ embeds: [embed2] })



}

exports.info = {
    name: "user",
    description: "user",
    useAliases: false,
    aliases: ['info', 'infouser']
}