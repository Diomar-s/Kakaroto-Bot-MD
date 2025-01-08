const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`╭━〔  ${global.packname}  〕⬣
┋👤 *Usuario:* ${name}
┋🐉 *dragones*: ${global.db.data.users[who].dragones} 🐉
┋💰 *Experiencia:* ${global.db.data.users[who].exp}
╰━━━━━━━━━━━━⬣

╭━〔  ${global.packname}  〕⬣
┃ _Puedes Comprar Mas 🪙_
┃ _Usando Los Siguentes Comandos_
┃ *${usedPrefix}buy <cantidad>*
┃ *${usedPrefix}buyall*
╰━━━━━━━━━━━━⬣`)
};
handler.help = ['bal'];
handler.tags = ['economy'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
