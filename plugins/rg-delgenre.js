const handler = async (m, { conn, command, usedPrefix }) => {

const user = global.db.data.users[m.sender];

if (!user.genre) {
return conn.reply(m.chat, '✎ No tienes un género asignado.', m)
}

user.genre = '';

return conn.reply(m.chat, '✐ Se ha eliminado tu genero', m)
};

handler.help = ['delgenre']
handler.tags = ['rg']
handler.command = ['delgenero', 'delgenre']
export default handler;
