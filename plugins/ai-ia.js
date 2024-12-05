import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return m.reply('🐉 *Ingresa un texto para hablar con la Bot*')

try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/ia/chatgpt?q=${text}`)
let json = await api.json()
m.reply(json.data)
} catch (error) {
console.error(error)
}}

handler.command = ['ia','chatgpt']

export default handler
