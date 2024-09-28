let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!args[0]) throw `\`\`\`[ 🌟 ] Ingresa el nombre de la aplicación que quieres descargar. Ejemplo:\n${usedPrefix + command} Clash Royale\`\`\``
let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`);
let result = await res.json();
let { name, size, lastUpdate, icon } = result;
let URL = result.dllink
let packe = result.package
let texto = ` \`\`\`
┏───────────┓
┊𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝘀 𝗔𝗽𝗸 ┊     
┗───────────┛
👾 App : ⇢ ${name} 🔥
🐉 Tamaño : ⇢ ${size} 💨
💨 Package : ⇢ ${packe} 🌟
🔱 Actulizado : ⇢ ${lastUpdate} 📢
    
Descargando su aplicación...espere

   - ${wm} -          
\`\`\`     
`
await conn.sendFile(m.chat, icon, name + '.jpg', texto, m)

await conn.sendMessage(m.chat, { document: { url: URL }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: ''}, { quoted: m });
}
handler.command = ['apk', 'apkdl', 'modapk']
handler.help = ['apkdl']
handler.tags = ['dl']
export default handler
