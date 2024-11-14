let linkRegex = /(https?:\/\/(?:www\.)?(?:t\.me|telegram\.me|whatsapp\.com)\/\S+)|(https?:\/\/chat\.whatsapp\.com\/\S+)|(https?:\/\/whatsapp\.com\/channel\/\S+)/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `🐲 *nooo!! el anti link esta activo pero eres sayagin, ¡salvado admin corrupto 🗣️!*`, m, rcanal, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `📎 *¡𝐄𝐇 𝐕𝐈𝐒𝐓𝐎 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄!*\n\n*${await this.getName(m.sender)} 𝑯𝑬𝒀 𝑰𝑵𝑪𝑬𝑷𝑻𝑶 𝐌𝐀𝐍𝐃𝐀𝐒𝐓𝐄𝐒 𝐔𝐍 𝐋𝐈𝐍𝐊 𝐐𝐔𝐄 𝐄𝐒𝐓𝐀 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐋𝐎 𝐂𝐔𝐀𝐋 𝐕𝐀𝐒 𝐀 𝐒𝐄𝐑 𝑴𝑨𝑵𝑫𝑨𝑫𝑶 𝑨 𝑽𝑰𝑶𝑳𝑨𝑹 𝑨 𝑻𝑼 𝑴𝑨𝑴𝑰*`, m, rcanal, )
if (!isBotAdmin) return conn.reply(m.chat, `🐲 *𝐁𝐔𝐄𝐍𝐎 𝐏𝐔𝐄𝐃𝐄𝐒 𝐇𝐀𝐂𝐄𝐑𝐋𝐎 𝐍𝐎 𝐒𝐎𝐘 𝐀𝐃𝐌𝐈𝐍 𝐍𝐎 𝐏𝐔𝐄𝐃𝐎 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐍𝐀𝐃𝐈𝐄 𝐗𝐃*`, m, rcanal, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, rcanal, )
}
return !0

}
