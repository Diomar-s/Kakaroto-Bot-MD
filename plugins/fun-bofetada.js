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
   // m.react('⏳');
    await conn.sendMessage(m.chat, { react: { text: '😲', key: m.key } })
    let str = `${name2} golpeó a  ${name}`.trim();
    if (m.isGroup){

    let pp = 'https://telegra.ph/file/3ba192c3806b097632d3f.mp4' 
    let pp2 = 'https://telegra.ph/file/58b33c082a81f761bbee8.mp4' 
    let pp3 = 'https://telegra.ph/file/da5011a1c504946832c81.mp4' 
    let pp4 = 'https://telegra.ph/file/20ac5be925e6cd48f549f.mp4' 
    let pp5 = 'https://telegra.ph/file/a00bc137b0beeec056b04.mp4' 
    let pp6 = 'https://telegra.ph/file/080f08d0faa15119621fe.mp4'
    let pp7 = 'https://telegra.ph/file/eb0b010b2f249dd189d06.mp4' 
    let pp8 = 'https://telegra.ph/file/734cb1e4416d80a299dac.mp4' 
    let pp9 = 'https://telegra.ph/file/fc494a26b4e46c9b147d2.mp4' 
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['slap @tag'];
handler.tags = ['fun'];
handler.command = ['slap','bofetada'];
handler.group = true;

export default handler;
