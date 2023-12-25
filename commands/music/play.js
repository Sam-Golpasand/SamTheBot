const voice = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');
exports.run = async (message, args, cmd, client, Discord, con) => {

    let channel = message.member.voice.channel;
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.errorColorHex)
        .setDescription("You must be in a voice channel to use this command.")
    if(!channel) return message.channel.send({ embeds: [embed] }).then((msg) => {
        if(client.config.deleteCommands) {
            setTimeout(() => {
                msg.delete().catch(e => {});
            }, 14000);
        }
    }).catch(e => {});

    let error = new MessageEmbed()
    .setColor(client.config.colorHex)
    .setDescription(`Please include a song to play.`)
    if(!args[0]) return message.channel.send({ embeds: [error] })

    client.distube.voices.join(message.member.voice.channel)

    try {
        message.channel.send({ content: "Searching..." }).then((msg) => {
            setTimeout(() => {
                msg.delete().catch(e => {})
            }, 4000);
        });
        client.distube.play(message, args.join(' '))
    } catch(e) {
        console.log(e)
    }

}

exports.info = {
    name: "play",
    description: "Play a song!",
    
    aliases: ['p']
}