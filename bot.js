const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const prefix = '.'
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`قــرأن كــريم`,"http://twitch.tv/S-F")
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')

});

client.login(process.env.BOT_TOKEN);




client.on('message', message => {
      if(message.content == 'قران'){
        message.react('🔊')}  return;
  const ytdl = require('ytdl-core');
    const stram0ptions = { seek: 0, volume: 100};  
    const broadcast = 
clien.createVoiceBroadcast();



message.gulid.member(message.author).voiceChannel.join()
       .then(connection => {
           const stream = ytdl('https://www.youtube.com/watch?v=Ktync4j_nmA', { filter : 'audioonly'});
           broadcast.playstream(stream);
           const dispatcher = connection.playBroadcast(broadcast);
 })
.catch(console.error);
});
