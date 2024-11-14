var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de Kakaroto-Bot*

⬡ Dudas: ${creador}
⬡ Tutoríal: *https://youtu.be/6ofgN61Eevg?si=79nDrqos0eq9usey*

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

git clone https://github.com/Diomar-s/Kakaroto-Bot-MD && cd Kakaroto-Bot-MD

yarn install && npm install

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🚩_

_Utilice "Sky Ultra Plus" para enviarle la instalación por el host *Sky* 🚩_`

conn.reply(m.chat, texto, m, rcanal )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/Diomar-s/Kakaroto-Bot-MD && cd Kakaroto-Bot-MD')
await delay(1000 * 1)
m.reply('yarn install && npm install ')
await delay(1000 * 1)
m.reply('npm start')
}

if (/^cafirexos$/i.test(m.text) ) {
conn.reply(m.chat, '✏️ *Instalación por Cafirexos*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Área de clientes:\nhttps://clientes.cafirexos.com\n\n• Panel:\nhttps://panel.cafirexos.com', m, rcanal)
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/975c007a1f3f2757ee123.png'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/c24470edcbe5e250b5089.png'}, caption: ''}, {quoted: fkontak})
}
}

}
handler.help = ['instalarbot']
handler.tags = ['main']
handler.command = ['instalargoku','instalarbot','instalarkakaroto']

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
*/
