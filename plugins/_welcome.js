import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
    let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => welcome)
    let pp2 = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => adios)
  let img = await (await fetch(`${pp}`)).buffer()
  let img2 = await (await fetch(`${pp2}`)).buffer()

  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let wel = ` ╒╾⟢ 𝐊𝐚𝐤𝐚𝐫𝐨𝐭𝐨-𝐁𝐨𝐭-𝐌𝐃 🐲 \n ┃『 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎/A 👋 』\n └┬⟢ 『 @${m.messageStubParameters[0].split`@`[0]} 』\n   ┃ ${groupMetadata.subject}\n   ┃🙏  PUEDES AYUDAR A LLEGAR A NUESTRA META DE SEGUIDORES\n  ┃🐉 https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t\n  ┗━━─────────────━━┛`
await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
   let bye = ` ╒╾⟢ 𝐊𝐚𝐤𝐚𝐫𝐨𝐭𝐨-𝐁𝐨𝐭-𝐌𝐃 ☁️ \n ┃『 𝐀𝐃𝐈Ó𝐒 🗣️‼️ 』\n └┬⟢ 『 @${m.messageStubParameters[0].split`@`[0]} 』\n   ┃🐲  𝐒𝐄 𝐅𝐔𝐄 𝐄𝐒𝐄 𝐏𝐔𝐓𝐎\n   ┃🐉 𝐍𝐮𝐧𝐜𝐚 𝐭𝐞 𝐪𝐮𝐢𝐬𝐢𝐦𝐨𝐬 𝐚𝐪𝐮í 𝐒𝐚𝐢𝐲𝐚𝐧 𝐝𝐞 𝐂𝐮𝐚𝐫𝐭𝐚\n   ┃🙏  PUEDES AYUDAR A LLEGAR A NUESTRA\n   ┃META DE SEGUIDORES\n   ┃🐉 https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t\n   ┗━━─────────────━━┛`
await conn.sendMini(m.chat, packname, dev, bye, img2, img2, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` ╒╾⟢ 𝐊𝐚𝐤𝐚𝐫𝐨𝐭𝐨-𝐁𝐨𝐭-𝐌𝐃 ☁️\n ┃『 𝐀𝐃𝐈Ó𝐒 😈‼️ 』\n └┬⟢ 『 @${m.messageStubParameters[0].split`@`[0]} 』\n   ┃🐲  𝐒𝐄 𝐅𝐔𝐄 𝐄𝐒𝐄 𝐏𝐔𝐓𝐎\n   ┃🐉 𝐍𝐮𝐧𝐜𝐚 𝐭𝐞 𝐪𝐮𝐢𝐬𝐢𝐦𝐨𝐬 𝐚𝐪𝐮í 𝐒𝐚𝐢𝐲𝐚𝐧 𝐝𝐞 𝐂𝐮𝐚𝐫𝐭𝐚\n   ┃🙏  PUEDES AYUDAR A LLEGAR A NUESTRA\n   ┃META DE SEGUIDORES\n   ┃🐉 https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t\n   ┗━━─────────────━━┛`
await conn.sendMini(m.chat, packname, dev, kick, img2, img2, channel, fkontak)
}}

/*import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/QgXi.m4a';
  let vn2 = 'https://qu.ax/pnSf.m4a';
  let welc = welcome;
  let adi = adios;
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, {
      audio: { url: vn },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "thumbnail": welc,
          "title": "  ͟͞ 𝐁 𝐈 𝐄 𝐍 𝐕 𝐄 𝐍 𝐈 𝐃 𝐎 ͟͞  ",
          "body": `${userName}!`,
          "previewType": "PHOTO",
          "thumbnailUrl": null,
          "showAdAttribution": true,
          sourceUrl: [yt, md, channel].sort(() => 0.5 - Math.random())[0]
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'welcome.mp3'
    }, { quoted: fkontak });
  }

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, {
      audio: { url: vn2 },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
        "thumbnail": adi,
        "title": '  ͟͞ 𝐀 𝐃 i 𝐎 𝐒 ͟͞  ',
        "body": `${userName}, se despide.`,
        "previewType": "PHOTO",
          "showAdAttribution": true,
          "containsAutoReply": true,
         "thumbnailUrl": null,
          "showAdAttribution": true,
          "sourceUrl": redes
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'bye.mp3'
    }, { quoted: fkontak });
  }
}*/
