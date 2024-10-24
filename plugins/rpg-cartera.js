let handler = async (m, {conn, usedPrefix}) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (who == conn.user.jid) return error 
if (!(who in global.db.data.users)) return conn.reply(m.chat, '💨 El usuario no se encuentra en mi base de Datos.', m, fake)
let user = global.db.data.users[who]
await m.reply(`${who == m.sender ? `Tienes *${user.cookies} Dragones 🐉* en tu Cartera` : `El usuario @${who.split('@')[0]} tiene *${user.cookies} Dragones 🐉* en su Cartera`}. `, null, { mentions: [who] })}

handler.help = ['dragones']
handler.tags = ['rpg']
handler.command = ['wallet', 'cartera', 'dragones', 'bal', 'coins']
handler.register = true 
export default handler
