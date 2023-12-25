const _config = {

    // Client Settings 
    prefix: "-", //Your prefix for your bot
    token: "OTUwNDQ0MTUzODk5MjA4Nzc0.Glewoe.nUt9ExOY-WxkxcZ6Dlbm-NwPx1w9rAqdTJLjLI", //Your bot token
    licenseKey: "rAO3OccX9BGCxjaeVMpW2mKBzaKNQyYLo12W_ajtQ-Bj5", //Your license key from https://license.samtheman.shop
    copyright: "© 2021 SamTheMan", //The copyright there will be in the bottom of some of your embeds
    newUserRoleId: "867880884198572032", //Your member role ID
    voicechanneltojoin: "840502498510503946", //Select a voice channel for the server to join when it comes online
    yourServerId: "813193767292633139", //Server id (To get the id right-click on the icon in the server list and press copy id)
    yourServerName: "Sam's Hangout", //Your Server name
    logoLink: "https://media.discordapp.net/attachments/705134531396632587/868180150204919828/pfp_round.png?width=701&height=701", //A logo of your choice
    mutedRoleName: 'Muted', //Muted role name
    memberRoleName: 'Member', //Member role name
    debugMode: true, //Shows all the errors in the console Default: false


    permissions: {
        moderation: ["826837049113706527"], //These role ID's will have access to staff commands
        ticketmanager: ["884812399834705960"] //These role ID's will have access to manage Tickets
    },
    
    //database login
    database: {
        host: "localhost",
        user: "root",
        password: "",
        database: "test"
    },

    // Presence Settings 
    presence: [
        {name: "samtheman.shop", type: "PLAYING", status: "online"},
        {name: "SamTheBot Out Now", type: "WATCHING", status: "online"},
        {name: "Prefix: -", type: "LISTENING", status: "online"}
    ],

    //Logger 
    loggerText: "SamTheBot", //The Main text in the logger
    loggerWidth: "450", //The width of the logger
    loggerHeaderColor: "blue", //The color of the main tect
    loggerBody: "Buruhrrhrhrh", //The small text under the main text
    loggerBackgroundColor: "disabled", //The background color (Either disabled or a colorHex)
    loggerBorderColor: "blue", //The border color of the logger
    loggerBorderStyle: "single", //Either single, classic, double, round or none
    loggerFullBorders: true, //If the borders should be full or not



    //Turn modules/commands on/off
    suggestion: true, //Turn on/off Suggestions
    ticket: true, //Turn on/off Tickets
    website: true, //Turn on/off Website
    paypal: true, //Turn on/off paypal/invoices
    payment2: true, //Turn on/off Second payment/invoice option


    //Channel Ids to send messages
    ticketCategoryId: '868805732328407080',//The category your tickets will be created in
    suggestionChannelName: 'suggestions',//The channel where your suggestions will be posted
    birthdayChannelSendId: "882691183388786798", // The channel your birthday messages will be sent

    // Log Settings 
    welcomeChannelId: "868167359532245095", //Select a channel for your welcome messages to go
    welcomeMessageColorHex: "#FFFFFF", //Select a color for your welcome message embed
    channelCreateLog: "879366700632530974", //The channel your "Create channel" logs will be poster
    channelCreateColorHex: "#FFFFFF", //Select a color for your channel create message embed
    deletedMessagesLog: "879372340889268276",//The channel where your "Deleted messages will be posted"
    deletedMessagesColorHex: "#FFFFFF", //Select a color for your deleted messages embed
    banLog: "880498697971044352", //Select a channel for your ban messages to go
    banColorHex: "#FFFFFF", //Select a color for your Ban log message embed
    kickLog: "880828077205229658", //Select a channel for your Kick messages to go
    kickColorHex: "#FFFFFF", //Select a color for your Kick Log message embed
    leftLog: "881504795482017803", //Select a channel for your leave messages to go
    leftLogColorHex: "#FFFFFF", //Select a color for your Left Log message embed

    // Shops and payment stuff
    websiteLink: "https://samtheman.shop",//Website link (Optional)
    payment1Name: "Paypal", //The payment name you want to use (I.e Paypal, Cashapp etc)
    paymentMethod: "https://paypal.me/samgolpasand?locale.x=da_DK", //Your payment link
    paymentColorHex: "#3b7bbf", //The color that the invoice embeds will be sent in 
    paymentCurrency: "$", //Your payment method default $

    //Second payment method
    paymentname2: "Cashapp", //The payment name you want to use (I.e Paypal, Cashapp etc)
    payment2Method: "https://paypal.me/samgolpasand?locale.x=da_DK", //Your Second payment link
    payment2ColorHex: "#3b7bbf", //The color that Your second invoice embeds will be sent in 

    //Birthday message
    bdayHeader: "Bruh happy birthday",
    bdayFooter: "hayypy bday",
    bdayColorHex: "#FFFFF",
    

    //Color Settings 
    errorColorHex: "#FF0000", //Default Red
    colorHex: "#FFFFFF",//The default colorhex your embeds will be posted in
    musicColorHex: "#FFFFFF",//The colorhex your music commands will be posted in
    helpColorHex: "#FFFFFF",//The colorhex your Help commands will be posted in

}

module.exports = _config;