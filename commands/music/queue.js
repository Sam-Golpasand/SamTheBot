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

    try {
        const queue = client.distube.getQueue(message);
        if(!queue || !queue.songs) return message.channel.send({ content: "There are no songs in the queue." })
        message.channel.send({ content: `${queue.songs.map((song, id) =>`**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}` })
    } catch(e) {
        console.log(e)
    }

}

exports.info = {
    name: "queue",
    description: "Shows the current queue",
    aliases: ['q']
}