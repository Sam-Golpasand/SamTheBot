const voice = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');
exports.run = async (message, args, cmd, client, Discord, con) => {

    let embed = new Discord.MessageEmbed()
    .setDescription("You must be in a voice channel to use this command.")
    .setColor(client.config.errorColorHex)

    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send({ embeds: [embed] })
    try {
        client.distube.stop(message)
        
    } catch(e) {
        console.log(e)
    }
}

exports.info = {
    name: "stop",
    description: "stops the current song playing",
    aliases: []
}