let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `🚩 *CORINPLUS - H O S T* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *Corinplus*, un hosting de calidad con servidores dedicados y precios por debajo de 1USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

🟢 \`\`\`Información del Host\`\`\`

🔮 *Dashboard:* 
• https://dash.corinplus.com

🧃 *Panel:*
• https://ctrl.corinplus.com

💥 *Canal:*
• https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g

⚜️ *Contacto (Marito)*
https://wa.me/5492266613038

> *Únete a está comunidad y disfruta de un servicio de calidad :D*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 C O R I N P L U S - H O S T 🔵`,
body: `⚜️ Super Hosting 24/7 ⚜️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/waCu.jpg', 
sourceUrl: 'https://dash.corinplus.com'}}},
{ quoted: fkontak})
}
handler.tags =['main'] 
handler.help = ['servidor', 'servidor'] 
handler.command = ['host', 'corin', 'corinplus', 'servidor']
export default handler
