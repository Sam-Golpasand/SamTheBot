const { MessageActionRow, MessageButton, MessageEmbed } = require ("discord.js")
module.exports = async (client, con, interaction) => {
  let helpembed = new MessageEmbed()
  let page1 = `**Prefix:**\n**${client.config.prefix}**\n**About:**\nThis is an advanced multi-purpose bot coded in Discord.js v13 that does everything from Music to Tickets to Logs And a whole lot more. This bot is built to take all the other bots you have in your server and put them all into one. If you would like a bot like this for your own get it here https://samtheman.shop`
  let page2 = `**Play:** Lets you play any song of your liking from YouTube\n **Pause/Resume:** Lets you pause and Resume the song that is currently playing\n **Skip:** Skips the current song that is playing\n **Queue:** Shows the current queue\n **Repeat/loop:** Repeat a song or the entire queue (0 = Disable, 1 = repeat song, 2 = repeat playlist\n **volume:** lets you change the volume of the songs you are listening to.)`;
  let page3 = `**Ban:** Bans a member that has done bad thing\n**unban:** Funny enough it unbans a user with their ID\n**Kick:** Kicks a member\n**Mute:** Mutes a member forever or for a limited time (10m = 10 minutes 10h = 10 hours etc\n**Unmute:** Unmutes a member\n**Embed:** Writes your message in an embed`
  let page4 = `**Suggestions:** You can suggest improvements or new features for the server\n**Ticket:** Makes a Ticket where a staff member can help with an issue you have\n**Ping:** Shows the bots ping\n**Avatar:** Shows the @'ed users avatar (I.e avatar @SamTheMan)\n**Website:** Shows a specified website\n**Add:** Adds a birthday so you get a nice birthday message from the bot (I.e add MM-DD-YYYY)\n**Remove:** Removes your birthday so you wont get a message on your birthday`
  let page5 = `**Pay:** You can enter an amount someone has to pay if they were buying a product and it will link to a payment method\n**Prefix:** Changes the prefix of the bot`
  let page6 = `**Programming:**\n[@SamTheMan](https://samtheman.shop)\n[@Hyperz](https://hyperz.dev)\n[@Synapse](https://discord.gg/KnveAuW574)\n\n**Tools used:**\nStack Overflow\nGithub\nDJS Documentation\nVS Code\n\n**Bug Testers:** \n[@Chr!s](https://samtheman.shop/team)\n [@Sir Diablo](https://samtheman.shop/team) `
  let buttons = new MessageActionRow() 
  .addComponents(
    new MessageButton()
    .setCustomId('helpPageLeft')
    .setLabel(`Back`)
    .setStyle(`PRIMARY`),
  )
  .addComponents(
    new MessageButton()
    .setCustomId('helpPageRight')
    .setLabel(`Next`)
    .setStyle(`PRIMARY`),
 )

    let message = interaction.message
    if(!interaction.isButton()) return
    if(interaction.user.bot){

    } else {
        if(interaction.customId === `test` ) {
          const row1 = new MessageActionRow()
          .addComponents(
            new MessageButton()
            .setCustomId("delete")
            .setLabel(`🔒 Close Ticket`)
            .setStyle("SECONDARY")
        )

          interaction.deferUpdate()
            const channel = await message.guild.channels.create(`ticket ${interaction.user.username}`);
            channel.setParent(client.config.ticketCategoryId);

            channel.permissionOverwrites.edit(message.guild.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            });
            channel.permissionOverwrites.edit(interaction.user.id, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
            let embed3 = new MessageEmbed()
            .setDescription(`<@${interaction.user.id}> Thank you for contacting support! Please write the reason you needed staff help!`)
            .setColor(client.config.colorHex)
            await channel.send({ embeds: [embed3], components: [row1] })


                let embed = new MessageEmbed()
                .setDescription(`A ticket has been made in! <#${channel.id}>`)
                .setColor(client.config.colorHex)
                message.channel
                  .send({embeds: [embed]}).then((msg) => {
                    setTimeout(() => {
                      msg.delete().catch(e => { if (config.debugmode) return console.log(e); });
                  }, 10000)
                  })
                
       } else if(interaction.customId === `delete` ) {
        interaction.deferUpdate()

        const channel = message.guild.channels.cache.get(interaction.message.channel.id);
        let embed = new MessageEmbed()
        .setDescription("Deleting this channel in 10 seconds!")
        .setColor(client.config.colorHex)
        channel.send( {embeds: [embed]});
        setTimeout(() => channel.delete(), 10000);

          
        } else if(interaction.customId === `helpPageRight` )  {

            if(interaction.message.embeds) {
              interaction.message.embeds.forEach(e => {
                if(e.footer.text.includes('Page 1/6')) {
                    helpembed.fields = null;
                    helpembed.setColor(client.config.colorHex)
                    helpembed.setDescription(page2);
                    helpembed.setTitle("**Music Commands:**");
                    helpembed.setFooter(`Page 2/6`)
                    interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                    interaction.deferUpdate();
                } else if(e.footer.text.includes('Page 2/6')) {
                  helpembed.fields = null;
                  helpembed.setDescription(page3);
                  helpembed.setColor(client.config.colorHex)
                  helpembed.setTitle("**Client Commands:**");
                  helpembed.setFooter(`Page 3/6`)
                  interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                  interaction.deferUpdate();
                
                } else if (e.footer.text.includes('Page 3/6')) {
                helpembed.fields = null;
                helpembed.setDescription(page4);
                helpembed.setColor(client.config.colorHex)
                helpembed.setTitle("**Staff Commands:**");
                helpembed.setFooter(`Page 4/6`)
                interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                interaction.deferUpdate();
                } else if (e.footer.text.includes('Page 4/6')) {
                  helpembed.fields = null;
                  helpembed.setDescription(page5);
                  helpembed.setColor(client.config.colorHex)
                  helpembed.setTitle("**Misc Commands:**");
                  helpembed.setFooter(`Page 5/6`)
                  interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                  interaction.deferUpdate();
                } else if (e.footer.text.includes('Page 5/6')) {
                  helpembed.fields = null;
                  helpembed.setDescription(page6);
                  helpembed.setColor(client.config.colorHex)
                  helpembed.setTitle("**Credits:**");
                  helpembed.setFooter(`Page 6/6`)
                  interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                  interaction.deferUpdate();
              
              } else if (e.footer.text.includes('Page 6/6')) {
                helpembed.fields = null;
                helpembed.setDescription(page1);
                helpembed.setColor(client.config.colorHex)
                helpembed.setTitle(`**${client.config.yourServerName} Help Menu**`);
                helpembed.setFooter(`Page 1/6`)
                interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                interaction.deferUpdate();
            
            }
            }) 
            }
          } else if(interaction.customId === `helpPageLeft` )  {


          if(interaction.message.embeds) {
            interaction.message.embeds.forEach(e => {
              if(e.footer.text.includes('Page 6/6')) {
                  helpembed.fields = null;
                  helpembed.setColor(client.config.colorHex)
                  helpembed.setDescription(page5);
                  helpembed.setTitle("**Misc Commands:**");
                  helpembed.setFooter(`Page 5/6`)
                  interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                  interaction.deferUpdate();
              } else if(e.footer.text.includes('Page 5/6')) {
                helpembed.fields = null;
                helpembed.setColor(client.config.colorHex)
                helpembed.setDescription(page4);
                helpembed.setTitle("**Staff Commands:**");
                helpembed.setFooter(`Page 4/6`)
                interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
                interaction.deferUpdate();
              
        } else if (e.footer.text.includes('Page 4/6')) {
         helpembed.fields = null;
         helpembed.setColor(client.config.colorHex)
         helpembed.setDescription(page3);
         helpembed.setTitle("**Client Commands:**");
         helpembed.setFooter(`Page 3/6`)
         interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
         interaction.deferUpdate();
        } else if (e.footer.text.includes('Page 3/6')) {
          helpembed.fields = null;
          helpembed.setColor(client.config.colorHex)
          helpembed.setDescription(page2);
          helpembed.setTitle("**Music Commands:**");
          helpembed.setFooter(`Page 2/6`)
          interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
          interaction.deferUpdate();
        } else if (e.footer.text.includes('Page 2/6')) {
          helpembed.fields = null;
          helpembed.setColor(client.config.colorHex)
          helpembed.setDescription(page1);
          helpembed.setTitle(`**${client.config.yourServerName} Help Menu:**`);
          helpembed.setFooter(`Page 1/6`)
          interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
          interaction.deferUpdate();
      
      } else if (e.footer.text.includes('Page 1/6')) {
        helpembed.fields = null;
        helpembed.setColor(client.config.colorHex)
        helpembed.setDescription(page6);
        helpembed.setTitle("**Credits:**");
        helpembed.setFooter(`Page 6/6`)
        interaction.message.edit({ embeds: [helpembed], components: [buttons] }).catch(e => {})
        interaction.deferUpdate();
    
    }
    })
  }
}
}    
}
