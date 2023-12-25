const Discord = require('discord.js');
module.exports = async (client, con, channel) => {
    let logs = await client.channels.cache.get(client.config.channelCreateLog)

    let embed = new Discord.MessageEmbed()
    .setTitle('A channel was created!\n')
    .setDescription(`**Name:** ${channel.name}\n**ID:** ${channel.id}\n**TYPE:** ${channel.type}`)
    .setColor(client.config.channelCreateColorHex)
    logs.send({ embeds: [embed] }).catch(e => {});
}

