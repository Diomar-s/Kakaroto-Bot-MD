let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    if (!user) {
        return conn.reply(m.chat, '👤 El usuario no se encuentra en la base de Datos.', m);
    }
    if (user.dragones < 20) {
        return conn.reply(m.chat, '💔 No tienes suficientes dragones para curarte. Necesitas al menos 50 dragones.', m);
    }
    let healAmount = 40; 
    user.health += healAmount;
    user.dragones -= 20; 
    if (user.health > 100) {
        user.health = 100; 
    }
    user.lastHeal = new Date();
    let info = `❤️ *Te has curado ${healAmount} puntos de salud.*\n🐉 *dragones restantes:* ${user.dragones}\n❤️ *Salud actual:* ${user.health}`;
    await conn.sendMessage(m.chat, { text: info }, { quoted: m });
};

handler.help = ['heal'];
handler.tags = ['rpg'];
handler.command = /^(heal)$/i;

export default handler;
