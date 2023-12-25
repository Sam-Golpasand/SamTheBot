const voice = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');
exports.run = async (message, args, cmd, client, Discord, con) => {
    const queue = client.distube.getQueue(message);
    let embed = new Discord.MessageEmbed()
    .setDescription("You must be in a voice channel to use this command.")
    .setColor(client.config.errorColorHex)
    let embed2 = new Discord.MessageEmbed()
    .setDescription("Remember to write a second argument (0 = disable, 1 = repeat song, 2 = repeat queue)")
    .setColor(client.config.errorColorHex)


    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send({ embeds: [embed] })
    if(!args[0]) return message.channel.send({ embeds: [embed2] })
    try {
        let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        message.channel.send("Set repeat mode to `" + mode + "`");
    } catch(e) {
        console.log(e)
    }
}

exports.info = {
    name: "repeat",
    description: "resumes the current song playing",
    aliases: ['loop']
}