const Discord = require('discord.js');
module.exports = async (client, con, message) => {

            const prefix = client.config.prefix;
            if(!message.content.startsWith(prefix) || message.author.bot) return;
        
            const args = message.content.slice(prefix.length).split(/ +/);
            const cmd = args.shift().toLowerCase();
        
            const command = await client.commands.get(cmd) || await client.commands.find(a => a.aliases && a.aliases.includes(cmd));
            try {
                command.run(message, args, cmd, client, Discord, con);
            } catch (e) {
                
                let embed = new Discord.MessageEmbed()
                .setDescription("There was an error trying to execute this command! (Make sure you spelt the command correctly)")
                .setColor(client.config.errorColorHex)
        
                message.reply({ embeds: [embed]});
            }
        
    }

    


