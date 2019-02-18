const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const client = new Discord.Client();

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help'],
            category: 'commands'
        });
    }

    exec(message) {


 const embed = new Discord.RichEmbed()


    .setTitle(`Yuti Help`)


    .setColor(3447003)


   .setThumbnail(this.client.user.displayAvatarURL)
   

    .addField(`Docs`, `docs <query>: shows you discord.js docs whatever you are looking for!\nnpm <package>: shows the searched information about a npm package.\nmdn <query>: shows the main documentation of JavaScript.`)
    .addField(`Other`, `stats: shows Yuti\'s status.\nprefix: shows Yuti\'s available prefixes.\ninvite: Gives you the link to invite Yuti in your guild!`)
    .setFooter(`Fire#5858`)

message.channel.send({ embed: embed });



    }
}

module.exports = HelpCommand;
