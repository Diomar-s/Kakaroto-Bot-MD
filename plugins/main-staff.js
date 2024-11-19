let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Diamond
🍟 *Rol:* Propietario
🚩 *Número:* wa.me/18098781279
✨️ *GitHub:* https://github.com/Antonigaming 

🌸  *Colaboradores:*

• Miguelon
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/18092803407

• Nicol
🍟 *Rol:* Contribuidor
🚩 *Número:* Wa.me/18292588251

• Antonio
🍟 *Rol:* Editor
🚩 *Número:* Wa.me/18098781279
`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
