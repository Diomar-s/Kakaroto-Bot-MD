import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
   // m.react('⏳');
    await conn.sendMessage(m.chat, { react: { text: '❤', key: m.key } })
    let str = `${name2} Le dio besos a ${name}`.trim();
    if (m.isGroup){
    
    // Directorio que contiene las imágenes
    let pp = 'https://telegra.ph/file/d6ece99b5011aedd359e8.mp4'
    let pp2 = 'https://telegra.ph/file/d6ece99b5011aedd359e8.mp4'
    let pp3 = 'https://telegra.ph/file/ba841c699e9e039deadb3.mp4'
    let pp4 = 'https://telegra.ph/file/ba841c699e9e039deadb3.mp4'
    let pp5 = 'https://telegra.ph/file/6497758a122357bc5bbb7.mp4'
    let pp6 = 'https://telegra.ph/file/6497758a122357bc5bbb7.mp4'
    let pp7 = 'https://telegra.ph/file/8c0f70ed2bfd95a125993.mp4'
    let pp8 = 'https://telegra.ph/file/8c0f70ed2bfd95a125993.mp4'
    let pp9 = 'https://telegra.ph/file/826ce3530ab20b15a496d.mp4'
    let pp10 = 'https://telegra.ph/file/826ce3530ab20b15a496d.mp4'
    let pp11 = 'https://telegra.ph/file/f66bcaf1effc14e077663.mp4'
    let pp12 = 'https://telegra.ph/file/f66bcaf1effc14e077663.mp4'
    let pp13 = 'https://telegra.ph/file/e1dbfc56e4fcdc3896f08.mp4'
    let pp14 = 'https://telegra.ph/file/e1dbfc56e4fcdc3896f08.mp4'
    let pp15 = 'https://telegra.ph/file/0fc525a0d735f917fd25b.mp4'
    let pp16 = 'https://telegra.ph/file/0fc525a0d735f917fd25b.mp4'
    let pp17 = 'https://telegra.ph/file/68643ac3e0d591b0ede4f.mp4'
    let pp18 = 'https://telegra.ph/file/68643ac3e0d591b0ede4f.mp4'
    let pp19 = 'https://telegra.ph/file/af0fe6eb00bd0a8a9e3a0.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6 ,pp7, pp8, pp9 ,pp10, pp12, pp13, pp14, pp15, pp16, pp17, pp18, pp19];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
  //  m.react('💞');
}

handler.help = ['beso @tag'];
handler.tags = ['fun'];
handler.command = ['kiss','beso','besar']
handler.register = true;
handler.group = true;

export default handler;
