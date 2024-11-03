import ws from 'ws';

let handler = async (m, { conn, prefijo, text, args, command }) => {
    let uniqueUsers = new Map();

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;
    let name = await conn.getName(m.sender);
    let totalusr = Object.keys(global.db.data.users).length;
    let rtotal = Object.entries(global.db.data.users).length || '0'
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    //let name = conn.getName(m.sender)
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("🐢");
    let menu = ``;

    let txt = `╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌻⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐇𝐨𝐥𝐚: ${name}💖\n`  
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐨\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${uptime}⏱️\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${rtotalreg}🧩\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${rtotal}🌺\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐕𝐞𝐫𝐬𝐢𝐨́𝐧 𝐝𝐞𝐥 𝐛𝐨𝐭\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬3.0.3❤‍🔥\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐭𝐮 𝐥𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐮𝐬𝐚𝐫\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐝𝐞𝐥 𝐁𝐨𝐭 (๑˃̵　ᴗ　˂̵)و\n`
        txt += `╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯ׂ`;

    let listSections = []
listSections.push({
title: `✎ SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Kakaroto`,
rows: [
{
title: "│🤴│ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ", 
description: "ɴᴜᴍᴇʀᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ legend",
id: `${prefijo}owner`,
},
{
title: "│🔥│ɢʀᴜᴘᴏs ᴏғᴄ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ Kakaroto-Bot,
id: `${prefijo}grupos`,
},
{
title: "│📢│𝗺𝗲𝗻𝘂 𝗱𝗲𝗹 𝗯𝗼𝘁", 
description: "𝗺𝗲𝗻𝘂 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁,
id: `${prefijo}menucompleto`,
},
{
title: "│🔥│comando calientes", 
description: "obten todos los comandos xxx,
id: `${prefijo}menuhorny`,
},
{
title: "│🐉│juegos del bot", 
description: "Todos los juegos disponibles en el bot,
id: `${prefijo}menujuegos`,
},
{
title: "│💥│ᴇsᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ᴇsᴛᴀᴅᴏ ᴀᴄᴛᴜᴀʟ ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}estado`,
},
{
title: "│❔│ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ᴍᴇɢᴜᴍɪɴ-ʙᴏᴛ",
id: `${prefijo}infobot`,
},
{
title: "│🧩│ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ʟᴀs ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʟᴏs ᴄʀᴇᴀᴅᴏʀᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}cuentas`,
},
{
title: "│🥂│sᴜʙʙᴏᴛs ᴀᴄᴛɪᴠᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ʙᴏᴛs (sᴜʙʙᴏᴛs) ᴀᴄᴛɪᴠᴏs ᴀᴄᴛᴜᴀʟᴍᴇɴᴛᴇ",
id: `${prefijo}bots`,
},
})   

let vid = "https://qu.ax/Tdqmz.jpg"
let img = "https://qu.ax/fcOAa.jpg"
await conn.sendListB(m.chat, menu, txt, `TOCA AQUÍ.`, [vid, img].getRandom(), listSections, m)                             ;
};

handler.tags = ['main'];
handler.help = ['menulista'];
handler.command = ['menulista','lista','menu','menulist','allmenu','allmenú','menú'];
handler.exp = 20;

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;