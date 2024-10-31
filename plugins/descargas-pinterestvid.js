import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw m.reply(`Ingresa un link de pinterest\n*✧ Ejemplo:* ${usedPrefix}${command} https://pin.it/7I5UODZJB`);
    
    conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    
    let ouh;
    try {
        ouh = await fetch(`https://api.agatz.xyz/api/pinterest?url=${text}`);
        if (!ouh.ok) throw new Error('Error en la respuesta de la API');
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        throw m.reply('Hubo un error al intentar obtener el video. Por favor, intenta de nuevo más tarde.');
    }

    let gyh;
    try {
        gyh = await ouh.json();
    } catch (error) {
        const responseText = await ouh.text();
        console.error('Error al parsear JSON:', error);
        console.log('Contenido de la respuesta:', responseText);
        throw m.reply('La respuesta no es un JSON válido.');
    }

    // Verifica la estructura de gyh antes de intentar enviar el video
    if (!gyh.data || !gyh.data.result) {
        console.error('No se encontró el video en la respuesta:', gyh);
        throw m.reply('No se pudo encontrar el video. Por favor, verifica el enlace.');
    }

    // Intentar enviar el video
    try {
        await conn.sendFile(m.chat, gyh.data.result, `pinvideobykeni.mp4`, `*✧ Url:* ${gyh.data.url}`, m);
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (sendError) {
        console.error('Error al enviar el video:', sendError);
        throw m.reply('Hubo un problema al enviar el video. Por favor, intenta de nuevo más tarde.');
    }
}

handler.help = ['pinvid'];
handler.tags = ['descargas'];
handler.command = /^(pinvid|pinvideo)$/i;
handler.premium = false;
handler.register = true;

export default handler;
