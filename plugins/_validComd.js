import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {
	
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let args = noPrefix.trim().split` `.slice(1)
let text = args.join` `
let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
if (help.includes(noPrefix)) return
let mean = didyoumean(noPrefix, help)
let sim = similarity(noPrefix, mean)
let som = sim * 100
await conn.sendPresenceUpdate('composing', m.chat)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let caption = `*💨  𝕙𝕠𝕝𝕒* @${who.split('@')[0]}
𝙴𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚚𝚞𝚎 𝚋𝚞𝚜𝚌𝚊𝚜 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚎𝚗 𝚖𝚒 𝚕𝚒𝚜𝚝𝚊 𝚙𝚎𝚛𝚘 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚎 𝚊𝚕𝚐𝚘 𝚜𝚒𝚖𝚒𝚕𝚊𝚛 
✔️ *${usedPrefix + mean}*
 ❗ *Similitud:* _${parseInt(som)}%_`
if (mean) conn.reply(m.chat, caption, m, { mentions: [who]})
}
}
