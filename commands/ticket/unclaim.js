exports.run = async (message, args, cmd, client, Discord, con) => {


    if(!message.channel.name.startsWith("ticket-"))return message.channel.send('This is not a ticket channel').catch(e => { }).then(msg => { setTimeout(() => {msg.delete().catch(e => { if (client.config.debugmode) return console.log(e); });
}, 10000)
});

const embed = new Discord.MessageEmbed()
.setDescription(`**Ticket unclaimed by:** <@${message.author.id}>`)
.setTimestamp()
.setFooter(client.config.copyright)
message.channel.send({ embeds: [embed]})
}

exports.info = {
    name: "unclaim",
    description: "unclaims a ticket",
    useAliases: false,
    aliases: []
}