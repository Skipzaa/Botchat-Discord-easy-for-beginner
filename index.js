const discord = require('discord.js');
const client = new discord.Client();

client.on('lets go', message => {
  console.log('ok');
});

client.on('message',message => {
          if(message.content === 'Hi') {
            message.channel.send('Hi, Nice to meet you')
            
          } 
});


client.login('TOKEN');
