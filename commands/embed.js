const Discord = require('discord.js')

module.exports = {
    run: message => {
         message.channel.send(new Discord.MessageEmbed()
         .setTitle('Scanner neuro')
         .setDescription('Voici un petit scanne neuro')
         .setColor('RANDOM')
         .addField('Médecine', 'Scanner de type T2 en coupe transversal',)
         .attachFiles('./index.js')
         .setAuthor('Ismael', 'https://cdn.discordapp.com/attachments/787453397195292683/793603892344258610/1024px-Circle-icons-dev.svg.png', 'https://github.com/ismael-shepherd')
         .setImage('https://media.giphy.com/media/Vn9JVHDAzYw1O/giphy.gif')
         .setThumbnail('https://cdn.discordapp.com/attachments/760842843773206579/793610429557506118/Neurologie_Blauw.png')
         .setFooter("Merci d'avoir lu")
         .setTimestamp()
         .setURL('https://cdn.discordapp.com/attachments/787453397195292683/793604337783799868/8260511841_51a84c6ade_k.jpg'))
    },
    name: 'embed',
}