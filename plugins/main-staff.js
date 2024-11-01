let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Legend
🫂 *Rol:* Propietario
🚩 *Número:* wa.me/584148256527
✨️ *GitHub:* https://github.com/Diomar-s 

👺  *Colaboradores:*

• Destroy
🫂 *Rol:* Editor
🚩 *Número:* Wa.me/584120346669

• niño piña
🫂 *Rol:* editor 
🚩 *Número:* Wa.me/593984964830

• Dino
🫂 *Rol:* Editor
🚩 *Número:* Wa.me/527774603921
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
