    exports.run = (message, args, cmd, client, Discord, con) => {
        
        const member = message.mentions.users.first();
        let embed = new Discord.MessageEmbed()
        .setDescription('You need to @ someone')
        .setColor(client.config.colorHex)

        if (!args[0]) return message.channel.send ({ embeds: [embed]});

        let embed2 = new Discord.MessageEmbed()
        .setImage(member.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed2] })
    }


exports.info = {
    name: "avatar",
    description: "Shows a members logo",
    useAliases: true,
    aliases: ['pfp', 'logo', 'icon']
}