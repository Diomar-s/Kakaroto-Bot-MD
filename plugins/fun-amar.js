
import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('♥️');
    let str = `${name2} está enamorado/a de ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://files.catbox.moe/dzvzig.mp4' 
    let pp2 = 'https://files.catbox.moe/mpdanp.mp4' 
    let pp3 = 'https://files.catbox.moe/s4x07r.mp4'
    let pp4 = 'https://files.catbox.moe/gqyiye.mp4'
    let pp5 = 'https://files.catbox.moe/kz4avh.mp4'
    let pp6 = 'https://files.catbox.moe/7nc274.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['love @tag'];
handler.tags = ['fun'];
handler.command = ['love','amar'];
handler.group = true;

export default handler;
