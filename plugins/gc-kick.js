var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '> _Responde un mensaje o etiqueta a las persona que quieres que expulse del grupo._*', m, rcanal );
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';
    //const nn = conn.getName(m.sender);

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '🚩 No puedo eliminar el bot del grupo', m, rcanal, );
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '🚩 No puedo eliminar al propietario del grupo', m, rcanal, );
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '🚩 No puedo eliminar al propietario del bot', m, rcanal );
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

//conn.reply('573012482597@s.whatsapp.net', `🚩 Un Admin Acabo De Eliminar Un Usuario En El Grupo:\n> ${groupMetadata.subject}.`, m, rcanal, );
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick','echar','hechar','sacar','ban'];
handler.admin = true;
handler.group = true;
handler.register = true
handler.botAdmin = true;

export default handler;
