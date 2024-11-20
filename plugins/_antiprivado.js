export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`> "🍧 Hola @${m.sender.split`@`[0]}, Lo Siento No Esta 🍭Permitido Escribirme Al Privado 🍫Por Lo Cual Seras Bloqueado/A\n\n> *🍫Puedes Unirte Al Grupo Oficial De La Bot🍿* 👇 https://whatsapp.com/channel/0029VawDxVnLSmbbtn80cI2F\n\n\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
