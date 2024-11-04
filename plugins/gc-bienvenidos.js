import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    let fakegif = {
        key: { 
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: m.chat } : {}) 
        },
        message: {
            videoMessage: { 
                title: 'kakaroto', 
                h: `Hmm`,
                seconds: '99999', 
                gifPlayback: true, 
                caption: '⚘݄☆꧁༒ĹєǤ𝒆𝐧𝐃༒꧂☆✨', 
                jpegThumbnail: logo5
            }
        }
    };

    let groupMetadata = await conn.groupMetadata(m.chat);
    let str = `𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨𝐬 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨\n${groupMetadata.subject}\n𝐄𝐬𝐩𝐞𝐫𝐚𝐦𝐨𝐬 𝐪𝐮𝐞 𝐥𝐨 𝐩𝐚𝐬𝐞𝐬 𝐛𝐢𝐞𝐧 𝐲 𝐪𝐮𝐞 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐥𝐞𝐚𝐬 𝐥𝐚𝐬 𝐫𝐞𝐠𝐥𝐚𝐬.\n> ৎ୭࠭͢☆꧁༒ĹєǤ𝒆𝐧𝐃༒꧂☆`.trim();

    if (m.isGroup) {
        let pp = 'https://telegra.ph/file/c62071be335ec9e97a0cf.mp4';
        const videos = [pp];
        const video = videos[Math.floor(Math.random() * videos.length)];

        const mentionedJid = groupMetadata.participants.map(v => v.id);

        await conn.sendMessage(m.chat, {
            video: { url: video },
            caption: str,
            gifPlayback: true,
            mentions: mentionedJid
        }, { quoted: fakegif });
    }
};

handler.help = ['bienvenido'];
handler.group = true;
handler.admin = true;
handler.tags = ['grupo'];
handler.command = ['bienvenidos','nuevos'];

export default handler;
