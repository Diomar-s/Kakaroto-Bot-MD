import fs from 'fs';
const timeout = 60000;
const poin = 10;
const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, 'Todavía hay alguien jugando aquí, espera hasta que termine', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/paises.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ🌏 *\`ADIVINA EL PAIS\`* 🌎
que pais es: *${json.question}*

⏱️ *Tiempo:* ${(timeout / 1000).toFixed(2)} Segundos
🎁 *Premio:* *+${poin}* Cookies 🍪`.trim();
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m, fake), json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `✨ Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout)];
};
handler.help = ['paises'];
handler.tags = ['fun'];
handler.command = /^(paises)$/i;
export default handler;