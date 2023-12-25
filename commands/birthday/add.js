exports.run = (message, args, cmd, client, Discord, con) => {
    
    let check = client.bdays.addbday(con, message.author.id, args[0])
    if(check) {

        const embed = new Discord.MessageEmbed()
            .setColor(`${client.config.bdayColorHex}`)
            .setTitle('Birthday added')
            .setDescription(`Date: ${args[0]}`)
        
            message.channel.send({ embeds: [embed]})
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor(`${client.config.errorColorHex}`)
        .setDescription(`Bday Add Failed!`)

        message.channel.send({ embeds: [embed] })
    }
}


exports.info = {
name: "add",
description: "birthday",
useAliases: true,
aliases: ['bdayadd']
}