
    exports.run = async (message, args, cmd, client, Discord, con) => {

        let embed1 = new Discord.MessageEmbed()
        .setDescription('You do not have permission to use that command!')
        .setColor('#FF0000') 

        let embed2 = new Discord.MessageEmbed()
        .setDescription("Remember to enter the amount of messages you want to clear!")
        .setColor('#FF0000') 

        let embed3 = new Discord.MessageEmbed()
        .setDescription("You have to enter a valid number to delete!")
        .setColor('#FF0000') 

        let embed4 = new Discord.MessageEmbed()
        .setDescription("You can't delete over 100 messages at once!")
        .setColor('#FF0000') 

        let embed5 = new Discord.MessageEmbed()
        .setDescription("You have to atleast delete one or more message!")
        .setColor('#FF0000') 

        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({ embeds: [embed1] });
        if(!args[0]) return message.reply({ embeds: [embed2] })
        if(isNaN(args[0])) return message.reply({ embeds: [embed3] })
        if(args[0] > 100) return message.reply({ embeds: [embed4] })
        if(args[0] < 1) return message.reply({ embeds: [embed5] })

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages).then(() => {
                let embed = new Discord.MessageEmbed()
                .setDescription(args[0] + ' messages deleted :broom:')
                .setColor(client.config.colorHex)
                message.channel.send({ embeds: [embed] })
            })
            }
        )}
        
        exports.info = {
            name: "clear",
            description: "Clears x amount of messages",
            useAliases: true,
            aliases: ['purge']
        }
