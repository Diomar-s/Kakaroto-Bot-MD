let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*💥 𝐆𝐫𝐮𝐩𝐨𝐬 𝖔𝖋𝖎𝖈𝖎𝖆𝖑𝖊𝖘 𝙺𝙰𝙺𝙰𝚁𝙾𝚃𝙾*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙👑𝐃𝐫𝐚𝐤𝐨-𝐁𝐨𝐭❄︎⋰⋰𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃👑❏ ${gp1}

   *♥︎👑⃟፝ᰯ🌹𝙶𝚁𝚄𝙿𝙾 𝙺𝙰𝙺𝙰𝚁𝙾𝚃𝙾🌹፝⃟ᰯུ👑♥︎*
┃🪄❏ https://chat.whatsapp.com/Jjs2l4X3LdP7RHr06WsasW
   
   *♥︎👑⃟፝ᰯ🌹𝑮𝒓𝒖𝒑𝒐 𝑺𝒖𝒃𝒃𝒐𝒕𝒔🌹፝⃟ᰯུ👑♥︎*
┃🪄❏ https://chat.whatsapp.com/Db9TD8uwhwKIKZmIxDd63e

   *♥︎👑⃟፝ᰯ🌹ʕ•ᴥ•ʔＤＲＡＫＯ Ｘ ＫＡＫＡＲＯＴＯ★᭄ꦿ᭄ꦿ🌹፝⃟ᰯུ👑♥︎*
┃🪄❏ https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ꪶꪾ𝙺𝙰𝙺𝙰𝚁𝙾𝚃𝙾⋰⋰𝕭𝖞 𝐊𝐢𝐧𝐠ꫂৎ୭࠱࠭ \n` + wm, media, [
['Menu Lista 👑', '/lista']], null, [
['⏤𝙺𝙰𝙺𝙰𝚁𝙾𝚃𝙾', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler
