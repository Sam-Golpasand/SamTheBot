const voice = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');
exports.run = async (message, args, cmd, client, Discord, con) => {

    let channel = message.member.voice.channel;
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.errorColorHex)
        .setDescription("You must be in a voice channel to use this command.")
    if(!channel) return message.channel.send({ embeds: [embed] })
    try {
        client.distube.pause(message)
    } catch(e) {
        console.log(e)
    }

}

exports.info = {
    name: "pause",
    description: "pauses the current song playing",
    aliases: []
}