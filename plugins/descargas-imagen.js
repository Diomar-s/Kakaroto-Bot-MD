import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*🚩 Uso Correcto: ${usedPrefix + command} MeguminBot*`;
conn.reply(m.chat, '🚩 *Descargando su imagen...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [[ // CARRUSEL 1
'Imagen 1', 
dev,
await res.getRandom()
], [ // CARRUSEL 2
'Imagen 2',
dev,
await res.getRandom()
], [ // CARRUSEL 3
'Imagen 2',
dev,
await res.getRandom()
], [ // CARRUSEL 4
'Imagen 4',
dev,
await res.getRandom()
]]
await conn.sendCarousel(m.chat, '🚩 Buscador - Imagenes', `🔍 Resultado de: ${text}`, text, messages, m)     
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['image','imagen'];
handler.group = true;
handler.register = true
export default handler;
