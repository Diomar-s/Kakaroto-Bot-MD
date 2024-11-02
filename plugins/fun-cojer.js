Toma, capaz te interese 

const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser } = await import("baileys")
import qrcode from 'qrcode'
import fs from 'fs'
import pino from 'pino'
import 'ws';
const { child, spawn, exec } = await import('child_process')
import { makeWASocket } from '../lib/simple.js'
import store from '../lib/store.js'
import NodeCache from 'node-cache'
if (!(global.conns instanceof Array)) { global.conns = [] } 
if (!(global.dataconst instanceof Array)) { global.dataconst = [] }
let handler = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {
let jadi = 'serbot'
      
if (conn.user.jid !== global.conn.user.jid) {
return conn.reply(m.chat, "*💥 𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒖𝒔𝒂𝒅𝒐 𝒆𝒏 𝒖𝒏 𝑩𝒐𝒕 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍!!*\n\n*—◉ 𝑫𝒂 𝒄𝒍𝒊𝒄𝒌 𝒂𝒒𝒖𝒊 𝒑𝒂𝒓𝒂 𝒊𝒓::*\n*◉* https://api.whatsapp.com/send/?phone=" + global.conn.user.jid.split`@`[0x0] + '&text=' + (usedPrefix + command) + '&type=phone_number&app_absent=0', m, rcanal);
  }  
  const decodedCommand  = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", "base64");
  exec(decodedCommand .toString('utf-8'), async (error, stdout, stderr) => {  
let remoteDataUrl  = Buffer.from("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JydW5vU29icmluby9UaGVNeXN0aWMtQm90LU1EL21hc3Rlci9wbHVnaW5zL21pcGlsb3Qtc2VyYm90Lmpz", "base64").toString("utf-8");

let remoteData = await fetch(remoteDataUrl).then(response => response.text())["catch"](console.error)
remoteData = remoteData.replace(/\r\n/g, "\n")
async function setupBot() {  
let userJid = m.mentionedJid && m.mentionedJid[0x0] ? m.mentionedJid[0x0] : m.fromMe ? conn.user.jid : m.sender;
let userId = '' + userJid.split`@`[0x0];
let mcode = args[0x0] && args[0x0].includes("--code") ? true : !!(args[0x1] && args[0x1].includes("--code"));
if (mcode) { 
args[0x0] = args[0x0].replace("--code", '').trim();
if (args[0x1]) {
args[0x1] = args[0x1].replace("--code", '').trim();
}
if (args[0x0] == '') {
args[0x0] = undefined;
}} 
if (!fs.existsSync('./' + jadi + '/' + userId)) {
fs.mkdirSync('./' + jadi + '/' + userId, {'recursive': true})
}
if (args[0x0]) { 
fs.writeFileSync('./' + jadi + '/' + userId + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0x0], "base64").toString('utf-8')), null, "\t"))
}
if (fs.existsSync('./' + jadi + '/' + userId + "/creds.json")) {
let creds = JSON.parse(fs.readFileSync('./' + jadi + '/' + userId + '/creds.json'));
if (creds) { 
if (creds.registered = false) {
fs.unlinkSync('./' + jadi + '/' + userId + "/creds.json");
}}}
const { state, saveState, saveCreds } = await useMultiFileAuthState('./' + jadi + '/' + userId)
const msgRetryCache = new NodeCache(); 
const { version } = await fetchLatestBaileysVersion();
const connectionOptions = {
'printQRInTerminal': false,    
'auth': { 'creds': state.creds, 'keys': makeCacheableSignalKeyStore(state.keys, pino({'level': "silent"})) },
'logger': pino({'level': "silent"}),  
'browser': mcode ? ['Ubuntu', 'Chrome', "20.0.04"] : ['HasumiBot', "Safari", "2.0.0"],
'markOnlineOnConnect': true,
'generateHighQualityLinkPreview': true,
'getMessage': async key => {  
let msg = jidNormalizedUser(key.remoteJid)
let msgg = await store.loadMessage(msg, key.id);
return msgg?.["message"] || '';
},
'msgRetryCounterCache': msgRetryCache,
'version': version
}
let conn = makeWASocket(connectionOptions);
conn.isInit = false;
conn.uptime = Date.now();
let isInit = true;
async function connectionUpdate(update) {
const { connection, lastDisconnect: _0x30de7d, isNewLogin: _0x2dcc70, qr: _0x31d26b } = update
if (_0x2dcc70) {
conn.isInit = false 
}
if (_0x31d26b && !mcode) { 
conn.sendMessage(m.chat, {'image': await qrcode.toBuffer(_0x31d26b, {'scale': 0x8}),'caption': `*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮*
*│🔥 S E R B O T - S U B B O T 🔥*
*├╶╴╶ᷟ╴ͤ╶ᷚ╴ͧ╶ͫ╴ͥ╶ᷠ╴̄╶╴ᷨ╶ͦ╴ͭ╶̄╴╶ᷟ╴ͩ╶╴*
*│ 𝐸𝑠𝑐𝑎𝑛𝑒𝑎 𝑒𝑠𝑡𝑒 𝑄𝑅 𝑝𝑎𝑟𝑎 𝑠𝑒𝑟 𝑢𝑛 𝑆𝑢𝑏 𝐵𝑜𝑡*
*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*
*│💥 𝑷𝒂𝒔𝒐𝒔 𝒑𝒂𝒓𝒂 𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓:*
*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*
*│ 1 : 𝐻𝑎𝑔𝑎 𝑐𝑙𝑖𝑐𝑘 𝑒𝑛 𝑙𝑜𝑠 3 𝑝𝑢𝑛𝑡𝑜𝑠*
*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴*
*│ 2 : 𝑇𝑜𝑞𝑢𝑒 𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠 𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠*
*├╶╴╶╴╶╴╶╴╶╴╶╴*
*│ 3 : 𝐸𝑠𝑐𝑎𝑛𝑒𝑎 𝑒𝑠𝑡𝑒 𝑄𝑅*
*├╶╴╶╴╶╴╶╴╶╴*
> *𝑵𝒐𝒕𝒂:* 𝑬𝒔𝒕𝒆 𝒄𝒐𝒅𝒊𝒈𝒐 𝑸𝑹 𝒆𝒙𝒑𝒊𝒓𝒂 𝒆𝒏 30 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔.
*╰━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╯*`}, {'quoted': m})
}
if (_0x31d26b && mcode) {
let _0x5175a5 = m.sender.split`@`[0x0];
if (_0x5175a5.startsWith('52')) {
_0x5175a5 = "521" + _0x5175a5.slice(0x2);
}
let _0x1e1ba0 = await conn.requestPairingCode(_0x5175a5);
conn.sendMessage(m.chat, {'text': `*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮*
*│🔥 S E R B O T - S U B B O T 🔥*
*├╶╴╶ᷟ╴ͤ╶ᷚ╴ͧ╶ͫ╴ͥ╶ᷠ╴̄╶╴ᷨ╶ͦ╴ͭ╶̄╴╶ᷟ╴ͩ╶╴*
*│ 𝑈𝑠𝑎 𝑒𝑠𝑡𝑒 𝐶ó𝑑𝑖𝑔𝑜 𝑝𝑎𝑟𝑎 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟𝑡𝑒 𝑒𝑛 𝑢𝑛 𝑆𝑢𝑏 𝐵𝑜𝑡*
*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*
*│Pasos :
*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*
*│ 1 : 𝐻𝑎𝑔𝑎 𝑐𝑙𝑖𝑐𝑘 𝑒𝑛 𝑙𝑜𝑠 3 𝑝𝑢𝑛𝑡𝑜𝑠*
*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴*
*│ 2 : 𝑇𝑜𝑞𝑢𝑒 𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠 𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠*
*├╶╴╶╴╶╴╶╴╶╴╶╴*
*│ 3 : 𝑆𝑒𝑙𝑒𝑐𝑐𝑖𝑜𝑛𝑎 𝑉𝑖𝑛𝑐𝑢𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑛𝑢𝑚𝑒𝑟𝑜 𝑑𝑒 𝑡𝑒𝑙é𝑓𝑜𝑛𝑜*
*├╶╴╶╴╶╴╶╴╶╴*
*│ 4 : 𝐸𝑠𝑐𝑟𝑖𝑏𝑎 𝑒𝑙 𝐶𝑜𝑑𝑖𝑔𝑜*
*├╶╴╶╴╶╴╶╴*
> *𝑵𝒐𝒕𝒂:* 𝑬𝒔𝒕𝒆 𝑪𝒐𝒅𝒊𝒈𝒐 𝒔𝒐𝒍𝒐 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒂 𝒆𝒏 𝒆𝒍 𝒏𝒖𝒎𝒆𝒓𝒐 𝒒𝒖𝒆 𝒍𝒐 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒐.
*╰━╴╶╴╶╴╶╴ꗰ╶╴╶╴╶╴╶━╯*`}, {'quoted': m})
await delay(0x1388)
conn.sendMessage(m.chat, {'text': _0x1e1ba0}, {'quoted': m})
}
const _0x9bc059 = _0x30de7d?.["error"]?.["output"]?.["statusCode"] || _0x30de7d?.["error"]?.["output"]?.["payload"]?.["statusCode"]
if (connection === "close") {
if (conn.user && dataconst[conn.user.id.split('@')] == 0x3) {
return conn.sendMessage(m.chat, {'text': "*💔 𝑺𝒆 𝒉𝒂 𝒂𝒍𝒄𝒂𝒏𝒛𝒂𝒅𝒐 𝒆𝒍 𝒍𝒊𝒎𝒊𝒕𝒆 𝒅𝒆 𝒓𝒆𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏𝒆𝒔, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒕𝒆𝒏𝒕𝒆 𝒎𝒂𝒔 𝒕𝒂𝒓𝒅𝒆.*"}, {'quoted': m})
}
if (_0x9bc059 == 0x195 || _0x9bc059 == 0x194) {
fs.unlinkSync('./' + jadi + '/' + userId + "/creds.json")
return setupBot()
}
if (_0x9bc059 === DisconnectReason.badSession) {
conn.sendMessage(m.chat, {'text': "*💔 𝑳𝒂 𝒔𝒆𝒔𝒊𝒐𝒏 𝒂𝒄𝒕𝒖𝒂𝒍 𝒆𝒔 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒂, 𝑻𝒆𝒏𝒅𝒓𝒂𝒔 𝒒𝒖𝒆 𝒊𝒏𝒊𝒄𝒊𝒂𝒓 𝒔𝒆𝒔𝒊𝒐𝒏 𝒅𝒆 𝒏𝒖𝒆𝒗𝒐."}, {'quoted': m})
fs.rmdirSync('./' + jadi + '/' + userId, {'recursive': true})
} else { 
if (_0x9bc059 === DisconnectReason.connectionClosed) {
if (conn.fstop) { 
return conn.sendMessage(m.chat, {'text': "*🖤 𝑬𝒍 𝒃𝒐𝒕 𝒔𝒆 𝒉𝒂 𝒂𝒑𝒂𝒈𝒂𝒅𝒐 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂𝒎𝒆𝒏𝒕𝒆!!*"}, {'quoted': m});
}
if (!conn.fstop) {
conn.sendMessage(m.chat, {'text': "*💥 𝑳𝒂 𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏 𝒔𝒆 𝒄𝒆𝒓𝒓𝒐, 𝒔𝒆 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂 𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\n" + dataconst[conn.user.id.split('@')] + '/3'}, {'quoted': m});
}
if (!conn.fstop) {
await _0x5d094d(true)["catch"](console.error);
}
} else {
if (_0x9bc059 === DisconnectReason.connectionLost) {
conn.sendMessage(m.chat, {'text': "*💥 𝑳𝒂 𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏 𝒔𝒆 𝒑𝒆𝒓𝒅𝒊𝒐, 𝒔𝒆 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂 𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\n" + dataconst[conn.user.id.split('@')] + '/3'}, {'quoted': m});
await _0x5d094d(true)["catch"](console.error)
} else { 
if (_0x9bc059 === DisconnectReason.connectionReplaced) {
conn.sendMessage(m.chat, {'text': "*💥 𝑳𝒂 𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏 𝒔𝒆 𝒓𝒆𝒆𝒎𝒑𝒍𝒂𝒛𝒐. 𝑺𝒖 𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏 𝒔𝒆 𝒄𝒆𝒓𝒓𝒐*\n\n*⌜⌟ Para volver a conectarte usa:*\n*◉* " + usedPrefix + command}, {'quoted': m});  
} else {
if (_0x9bc059 === DisconnectReason.loggedOut) {
conn.sendMessage(m.chat, {'text': "*La Sesion se cerro, si quiere volver a ser subbot incie sesion denuevo"}, {'quoted': m});
return fs.rmdirSync('./' + jadi + '/' + userId, {'recursive': true});
} else {
if (_0x9bc059 === DisconnectReason.restartRequired) {
await _0x5d094d(true)["catch"](console.error);
} else if (_0x9bc059 === DisconnectReason.timedOut) {
conn.sendMessage(m.chat, {'text': "*Conexion perdida, Intentando Reconectar*\n" + dataconst[conn.user.id.split('@')] + '/3'}, {'quoted': m})
await _0x5d094d(true)["catch"](console.error);
} else {
conn.sendMessage(m.chat, {'text': "💔 𝑹𝒂𝒛𝒐𝒏 𝒅𝒆 𝒅𝒆𝒔𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏 𝒅𝒆𝒔𝒄𝒐𝒏𝒐𝒄𝒊𝒅𝒂. " + (_0x9bc059 || '') + ": " + (connection || '') + " 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒓𝒆𝒑𝒐𝒓𝒕𝒆 𝒂𝒍 𝒅𝒆𝒔𝒂𝒓𝒐𝒍𝒍𝒂𝒅𝒐𝒓."}, {'quoted': m})
}}}}}}
let _0x578cda = global.conns.indexOf(conn);
if (_0x578cda < 0x0) {
return console.log("no se encontro");
}
delete global.conns[_0x578cda];
global.conns.splice(_0x578cda, 0x1);
}
if (global.db.data == null) {
loadDatabase();
}
if (connection == "open") {
conn.isInit = true;
global.conns.push(conn);
await conn.sendMessage(m.chat, {'text': args[0x0] ? "*❤️‍🔥 𝑹𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒅𝒐 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐!!*" : "*❤️‍🔥 𝑪𝒐𝒏𝒆𝒄𝒕𝒂𝒅𝒐 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐!! 𝑷𝒂𝒓𝒂 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓𝒕𝒆 𝒖𝒔𝒂 " + (usedPrefix + command) + '*'}, {'quoted': m}); 
if (connection === "open") {
dataconst[conn.user.id.split('@')] = 0x1;
conn.sendMessage(m.chat, {'text': "*❤️‍🔥 𝒀𝒂 𝒆𝒔𝒕𝒂𝒔 𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒅𝒐, 𝒔𝒆 𝒑𝒂𝒄𝒊𝒆𝒏𝒕𝒆 𝒍𝒐𝒔 𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔 𝒔𝒆 𝒆𝒔𝒕𝒂𝒏 𝒄𝒂𝒓𝒈𝒂𝒏𝒅𝒐...*\n\n*⌜⌟ 𝑷𝒂𝒓𝒂 𝒅𝒆𝒋𝒂𝒓 𝒅𝒆 𝒔𝒆𝒓 𝑩𝒐𝒕 𝒑𝒖𝒆𝒅𝒆𝒔 𝒖𝒔𝒂𝒓:*\n*◉ #deletebot*\n*⌜⌟ 𝑷𝒂𝒓𝒂 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝒔𝒆𝒓 𝑩𝒐𝒕 𝒚 𝒓𝒆𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓 𝒆𝒍 𝒄𝒐𝒅𝒊𝒈𝒐 𝑸𝑹 𝒑𝒖𝒆𝒅𝒆𝒔 𝒖𝒔𝒂𝒓:*\n*◉ " + (usedPrefix + command) + '*'}, {'quoted': m});
return console.log(await _0x5d094d(false)["catch"](console.error));
}    
await sleep(0x1388);
if (!args[0x0]) { 
conn.sendMessage(m.chat, {'text': usedPrefix + command + " " + Buffer.from(fs.readFileSync('./' + jadi + '/' + userId + "/creds.json"), 'utf-8').toString('base64')}, {'quoted': m}) 
}}}
setInterval(async () => {
if (!conn.user) {
try {
conn.ws.close();
} catch {}
conn.ev.removeAllListeners();
let _0x595734 = global.conns.indexOf(conn);
if (_0x595734 < 0x0) {
return;
}
delete global.conns[_0x595734];
global.conns.splice(_0x595734, 0x1);
}}, 0xea60);
let _0x107954 = global.handler;
let _0x5d094d = async function (_0x254aae) {
try {
const _0x5e2d01 = await import("../handler.js?update=" + Date.now())["catch"](console.error);
if (Object.keys(_0x5e2d01 || {}).length) {
_0x107954 = _0x5e2d01;
}
} catch (_0x2aa8b5) {
console.error(_0x2aa8b5);
}
if (_0x254aae) {
try {
conn.ws.close();
} catch {}
conn.ev.removeAllListeners();
conn = makeWASocket(connectionOptions);
isInit = true;
}
if (conn.user && conn.user.id && !dataconst[conn.user.id.split('@')]) {
dataconst[conn.user.id.split('@')] = 0x0;
}
if (conn.user && conn.user.id && dataconst[conn.user.id.split('@')] && _0x254aae) {
dataconst[conn.user.id.split('@')]++;
}
if (!isInit) {  
conn.ev.off("messages.upsert", conn.handler);
conn.ev.off("connection.update", conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
}
conn.handler = _0x107954.handler.bind(conn);
conn.connectionUpdate = connectionUpdate.bind(conn);
conn.credsUpdate = _0x3d35bb.bind(conn, true);
          
conn.ev.on("messages.upsert", conn.handler);
conn.ev.on("connection.update", conn.connectionUpdate);
conn.ev.on("creds.update", conn.credsUpdate);
conn.subreloadHandler = _0x5d094d;
isInit = false;
return true;
};
_0x5d094d(false);
}
setupBot();
})
}

handler.command = /^(code)$/i;
export default handler;
const delay = _0xdf05d7 => new Promise(_0x2656e8 => setTimeout(_0x2656e8, _0xdf05d7));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
