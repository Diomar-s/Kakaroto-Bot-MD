const handler = async (m, {conn, text}) => {
const [nomor, pesan, jumlah] = text.split('|');

if (!nomor) return conn.reply(m.chat, '*Uso Correcto:*\n*🐉 #spamwa numero|texto|cantidad*', m, rcanal);

if (!pesan) return conn.reply(m.chat, '*Uso Correcto:*\n*🐉 #spamwa numero|texto|cantidad*', m, rcanal);

if (jumlah && isNaN(jumlah)) return conn.reply(m.chat, '*💨 La cantidad deve ser un numero*', m, rcanal);

const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
const fixedJumlah = jumlah ? jumlah * 1 : 10;

if (fixedJumlah > 999) return conn.reply(m.chat, '*⚠️ Minimo 50 Caracteres*', m, fake);

await conn.reply(m.chat, '*☁️ Se envió con éxito el spam.*', m, rcanal);
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), null);
}
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['tools'];
handler.command = ['spam', 'spamwa'];
handler.premium = true;
export default handler;