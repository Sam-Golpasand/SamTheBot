const Discord = require('discord.js');
module.exports = async (client, con, guildMember) => {
    let logs = await client.channels.cache.get(client.config.leftLog)
    
  const embed = new Discord.MessageEmbed()
  .setColor(client.config.leftLogColorHex)
  .setTitle(`User has left the server`)
  .setDescription(`**Tag:** ${guildMember.user.tag}\n**id:** ${guildMember.user.id}`)


  logs.send({ embeds: [embed]});

      
}
