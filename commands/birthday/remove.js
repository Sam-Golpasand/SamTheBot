exports.run = (message, args, cmd, client, Discord, con) => {
    
    let check2 = client.bdays.removebday(con, message.author.id)
    if(check2) {

        const embed = new Discord.MessageEmbed()
            .setColor(`${client.config.bdayColorHex}`)
            .setTitle('Birthday Removed')
            .setDescription(`Birthday for <@${message.author.id}> has been removed`)
        
            message.channel.send({ embeds: [embed]})
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor(`${client.config.errorColorHex}`)
        .setDescription(`Bday Remove Failed!`)

        message.channel.send({ embeds: [embed] })
    }
}


exports.info = {
name: "remove",
description: "birthday",
useAliases: true,
aliases: []
}