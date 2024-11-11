import axios from 'axios';
import yts from 'yt-search';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) throw m.reply(`Ejemplo de uso: ${usedPrefix + command} Waguri Edit`);
  
    let results = await yts(text);
    let tes = results.videos[0]
    
const baseUrl = 'https://cuka.rfivecode.com';
const cukaDownloader = {
  youtube: async (url, exct) => {
    const format = [ 'mp3', 'mp4' ];
    try {
      const response = await fetch(`${baseUrl}/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({ url, format: exct })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  },
  tiktok: async (url) => {
    try {
      const response = await fetch(`${baseUrl}/tiktok/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({ url })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  },
  spotify: async (url) => {
    try {
      const response = await fetch(`${baseUrl}/spotify/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({ url })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  }
}
await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let dataos = await cukaDownloader.youtube(tes.url, "mp4")
let { title, thumbnail, quality, downloadUrl } = dataos
 const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("Error al obtener el buffer", error);
    throw new Error("Error al obtener el buffer");
  }
}
    let videop = await getBuffer(downloadUrl)
	await conn.sendFile(m.chat, videop, `${title}.mp4`, `\`✦ Pedido terminado\``, m)
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['playvideo'];
handler.tags = ['downloader'];
handler.command = /^(playvideo|playvid|play2)$/i;

export default handler;
