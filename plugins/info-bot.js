import fs from 'fs';
import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bro$/i.test(m.text)) {
conn.reply(m.chat, `👻 ¡Hola! Soy Kakatoto-Bot, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
 if (/^grupo|aceptar|tenerunbot|como puedo tener el bot en mi grupo/i.test(m.text)) {
conn.reply(m.chat, `**¿QUIERES A KAKAROTO-BOT EN TU GRUPOS?*🔥 

!! *Pues es fácil lo único que pedimos*!!🙂‍↔️

Q haga  que 15 amigos o conocidos sigan el canal, una vez que lo hagan le dices que te mandé cap de que ya siguen el canal y me lo reenvías junto con el link de tus grupos a donde quieras el bot_ 🎁

*enviar los captures a este número* +54 9 11 6640-1905.

*Link de canal que deben seguir* 👇

https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t*`, m, rcanal, )
  }
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so y arroz* 👌🤌`, m, rcanal, )
}*/
/*if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*pervertido* 🫣`, m, rcanal, )
}*/
/*if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rroz y pollo* 😄👌`, m, rcanal, )
}*/
if (!chat.isBanned && m.text.match(/(te amo|teamo|te amo bot|te amo kakaroto)/gi)) {
  conn.sendMessage(m.chat, {
 stiker:{ url: global.stickeramor}
}, { quoted: fakegif2});
}

/*if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*tu mamá we* 😹`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes* 😹`, m, rcanal, )
}*/
return !0;
};
export default handler;
