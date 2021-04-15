import {Client} from 'discord.js';
import Database from '@replit/database';

const db = new Database();
const client = new Client();

client.on('message', (msg) => {
  
});

client.login(process.env['BOT_TOKEN']);