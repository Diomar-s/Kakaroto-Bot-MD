import MessageType from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from "fs"
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) return m.reply(`✨ Ejemplo: *${usedPrefix + command}* 😎+🤑`)
let [emoji, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}}
handler.help = ['emojimix *<emoji+emoji>*']
handler.tags = ['sticker']
handler.command = ['emojimix'] 
//handler.limit = 1
handler.register = true 

export default handler