const Discord = require('discord.js'),
  client = new Discord.Client({
    fetchAllMembers: true
  }),
  config = require('./config.json'),
  fs = require('fs')


client.login(config.token)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
  if(err) throw err 
  files.forEach(file => {
    if(!file.endsWith('.js')) return 
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
  })
})

client.on('message', message => {
  if(message.type !== 'DEFAULT' || message.author.bot) return


 // Commande 'split' sert a mettre les chiffres et lettre ensemble. Commande 'toLowerCase' sert a mettre tout en minuscule 
  const args = message.content.trim().split(/ +/g)
  const commandName = args.shift().toLowerCase()
  if (!commandName.startsWith(config.prefix)) return
  const command = client.commands.get(commandName.slice(config.prefix.length))
  if (!command) return
  if(command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peux etre utiliser que dans un serveur')
  command.run(message, args, client)
})

if(command === 'ticket'){
  client.commands.get('ticket').execute(client, message, args);
} else if (command === 'endticket'){
  client.commands.get('endticket').execute(client, message, args);
}


client.login(process.env.TOKEN);