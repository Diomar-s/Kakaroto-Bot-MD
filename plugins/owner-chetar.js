const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `🚩 *@${m.sender.split('@')[0]} Ahora tienes recursos ilimitados*`, mentions: [m.sender]}, {quoted: fkontak});
      global.db.data.users[m.sender].gokucoins = Infinity;
    global.db.data.users[m.sender].dragones = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
global.db.data.users[m.sender].personajes = Infinity;    
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = ['ilimitado','infiniy','chetar'];
handler.rowner = true;
handler.fail = null;
export default handler;
