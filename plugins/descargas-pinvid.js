import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw m.reply(`🐉 *Ingresa un link de pinterest*\n*💨 Ejemplo:* ${usedPrefix}${command} https://pin.it/5zrgi6kkF`);
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	let ouh = await fetch(`https://api.agatz.xyz/api/pinterest?url=${text}`)
  let gyh = await ouh.json()
	await conn.sendFile(m.chat, gyh.data.result, `pinvideobykeni.mp4`, `*🔗 Url:* ${gyh.data.url}`, m)
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['pinvid *<link>*']
handler.tags = ['descargas']
handler.command = /^(pinvid|pinvideo)$/i
handler.premium = false
handler.register = true
export default handler
