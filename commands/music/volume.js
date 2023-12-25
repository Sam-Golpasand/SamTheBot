const voice = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');
exports.run = async (message, args, cmd, client, Discord, con) => {

    let channel = message.member.voice.channel;
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.errorColorHex)
        .setDescription("You must be in a voice channel to use this command.")
    if(!channel) return message.channel.send({ embeds: [embed] })
    
    let error = new MessageEmbed()
    .setColor(client.config.musicColorHex)
    .setDescription(`You must include a new volume.`)
    if(!args[0]) return message.channel.send({ embeds: [error] })
    if(!Number(args[0]) && args[0] !== '0') return message.channel.send(`Please include a valid number to set the volume to.`) 

    try {
        client.distube.setVolume(message, Number(args[0]))
        message.channel.send({ content: "Volume set to `" + args[0] + "`"})
    } catch(e) {
        console.log(e)
    }

}

exports.info = {
    name: "volume",
    description: "coltrols the current volume of the music",
    aliases: ['v']
}