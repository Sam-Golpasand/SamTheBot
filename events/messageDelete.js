const Discord = require('discord.js');
module.exports = async (client, con, messageDelete) => {
    if (messageDelete.partial) await messageDelete.fetch();
    let logs = await client.channels.cache.get(client.config.deletedMessagesLog)

    let embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted")
    .setAuthor(messageDelete.author.tag, messageDelete.author.avatarURL({ dynamic: true }))
    .setDescription(`**User ID:** ${messageDelete.author.id}\n**Channel:** ${messageDelete.channel.name}\n${messageDelete.content}`)
    .setColor(client.config.messageDeleteColorHex)
    logs.send({ embeds: [embed] }).catch(e => {});
}