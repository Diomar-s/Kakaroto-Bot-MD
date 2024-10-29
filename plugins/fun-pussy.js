//Codígo creado por Destroy wa.me/584120346669

import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply('🚩 *¡Estos comandos están desactivados!*');
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('😛');
    let str = `${name2} le esta lamiendo el coño a ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://qu.ax/Kejmn.mp4' 
    let pp2 = 'https://qu.ax/PSBkz.mp4' 
    let pp3 = 'https://qu.ax/gaZHP.mp4'
    let pp4 = 'https://qu.ax/OvlTU.mp4'
    let pp5 = 'https://qu.ax/LPcsZ.mp4'
    let pp6 = 'https://qu.ax/Smfz.mp4'
    let pp7 = 'https://qu.ax/EDZBg.mp4'
    let pp8 = 'https://qu.ax/SFFq.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['pussy/coño @tag'];
handler.tags = ['fun'];
handler.command = ['pussy','coño'];
handler.group = true;

export default handler;
