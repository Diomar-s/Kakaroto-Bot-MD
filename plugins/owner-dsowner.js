/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
}
let sessionPath = './GokuSession/'
try {

if (!existsSync(sessionPath)) {
}
let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
}
}
if (filesDeleted === 0) {
} else {
}
} catch (err) {
}

}
handler.help = ['dsowner']
handler.tags = ['fix', 'owner']
handler.customPrefix = /dsowner|👀|👻|😂|🗿|❤️|🫠|🤣|🥴|💀|💔|🔥|😯|😗|😛|😙|😐|🧩|🍧|🧀|👍🏻|👍|😡|🤬|😈|😒/
handler.command = new RegExp

export default handler
