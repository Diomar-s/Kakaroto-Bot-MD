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
    m.react('🥵');
    let str = `${name2} se corrio dentro de ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://files.catbox.moe/ps4qif.mp4' 
    let pp2 = 'https://files.catbox.moe/1g6hcl.mp4' 
    let pp3 = 'https://files.catbox.moe/qzsed0.mp4' 
    let pp4 = 'https://files.catbox.moe/4x2i8x.mp4' 
    let pp5 = 'https://files.catbox.moe/i02zhp.mp4' 
    let pp6 = 'https://files.catbox.moe/4ws6bs.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['correrse @tag'];
handler.tags = ['fun'];
handler.command = ['cum'];
handler.group = true;

export default handler;
