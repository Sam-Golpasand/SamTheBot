const { MessageActionRow, MessageButton } = require ("discord.js")
exports.run =  (message, args, cmd, client, Discord, con) => {
    if (client.config.ticket) {

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("test")
        .setLabel("Create")
        .setStyle("PRIMARY")
    )
    let embed2 = new Discord.MessageEmbed()
    .setDescription('You do not have permission to use that command')
    .setColor(client.config.errorColorHex)
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({ embeds: [embed2]});
    
        const embed = new Discord.MessageEmbed()
        .setTitle("Ticket")
        .setColor(client.config.colorHex)
        .setDescription("Press the button below to make a ticket")
        message.channel.send({ embeds: [embed], components: [row]})
    } else {
        message.channel.send({ content: "This module/command is disabled..." })
    }
}

exports.info = {
    name: "ticket",
    description: "Shows a members logo",
    useAliases: true,
    aliases: []
}