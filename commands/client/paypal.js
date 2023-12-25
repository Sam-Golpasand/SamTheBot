exports.run = async (message, args, cmd, client, Discord, con) => {

    if(client.config.paypal){
    if(!args[0]) return message.channel.send('You have to enter the amount of money to invoice');
    if(Number.isNaN(+args[0])) return message.channel.send ("You have to put an actual number")
    if(client.config.payment2Name = "") return;

    const method1 = new Discord.MessageEmbed()
    .setColor(client.config.paymentColorHex)
        .setTitle(`${client.config.payment1Name}`)
        .setDescription(`${client.config.paymentMethod}`)

        message.channel.send({embeds: [method1]});

        if(client.config.payment2){
        const method2 = new Discord.MessageEmbed()
        .setColor(`${client.config.payment2ColorHex}`)
        .setTitle(`${client.config.paymentname2}`)
        .setDescription(`${client.config.payment2Method}`)
    
            message.channel.send({embeds: [method2]});
        } 

    const embed = new Discord.MessageEmbed()
    .setColor(client.config.paymentColorHex)
    .setDescription(`**NOTICE:** Awaiting payment of ${args[0]}${client.config.paymentCurrency}\n`)

    message.channel.send({embeds: [embed]})
    } else {
        message.channel.send({content: 'This module is disabled...'}).then(msg => {
            setTimeout (() =>{
                msg.delete ()
            }, 10000)
        })
    }
}

exports.info = {
    name: "paypal",
    description: "Pong",
    useAliases: true,
    aliases: ['pay', 'invoice']
}