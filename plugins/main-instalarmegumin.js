var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de Kakaroto-Bot-MD*

⬡ Dudas: ${creador}
⬡ Tutoríal: *¡Pronto!*

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

git clone https://github.com/Diomar-s/Kakaroto-Bot-MD && cd Kakaroto-Bot-MD

yarn install && npm install

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🚩_

_Utilice "corinplus" para enviarle la instalación por el host *Corinplus* 🚩_`

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


}
handler.help = ['instalarKakaroto']
handler.tags = ['main']
handler.command = ['instalargoku','instalarbot','instalarKakaroto']

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
*/
