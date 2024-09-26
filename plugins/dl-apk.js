import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  if (!text) throw 'Ingrese el nombre del APK';

  try {
    m.react(rwait);

    const apiUrl = `${apikasu}/api/dowloader/apk?apk=${text}&apikey=${apikeykasu}`;
    const response = await axios.get(apiUrl);
    console.log('API Response:', response.data);
    const data = response.data.result;

    let responseText = `
> Información

*Nombre:* ${data.name}\n
*Última Actualización:* ${data.lastup}\n
*Tamaño:* ${data.size}\n
*Paquete:* ${data.package}\n`;
    await conn.sendMessage(m.chat, { image: { url: data.icon }, caption: responseText }, { quoted: m });

    // Descarga y envío del archivo APK
    const apkResponse = await fetch(data.dllink);
    const apkBuffer = await apkResponse.buffer();
    await conn.sendFile(m.chat, apkBuffer, `${data.name}.apk`, null, m);

  } catch (error) {
    console.error(error);
    throw `
> Sin respuesta

Ocurrió un error al procesar la solicitud`;
  }
};

handler.help = ['apk aplicacion'];
handler.tags = ['dl'];
handler.command = /^(apk|descargarapp|descargarapk)$/i;

export default handler;
