/* Código hecho por I'm Fz `
 - https/Github.com/FzTeis
*/

async function getShortUrl(longUrl) {
  try {
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    return response.data;
  } catch (error) {
    console.error('Error al acortar el enlace:', error.message);
    return longUrl; // Devuelve la URL original si hay un error
  }
}

async function getAnimeEpisodes(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    
    const script = $('script').filter((i, el) => {
      const text = $(el).text();
      return text.includes('var anime_info') && text.includes('var episodes');
    });

    if (script.length === 0) {
      throw new Error('No se encontró el script que contiene las variables.');
    }

    const scriptText = script.html();
    const animeInfoMatch = scriptText.match(/var anime_info = (\[.*?\]);/);
    const episodesMatch = scriptText.match(/var episodes = (\[.*?\]);/);

    if (!animeInfoMatch || !episodesMatch) {
      throw new Error('No se encontraron las variables anime_info o episodes en el script.');
    }

    const animeInfo = JSON.parse(animeInfoMatch[1]);
    const episodes = JSON.parse(episodesMatch[1]);

    const animeId = animeInfo[1];

    const episodeUrls = episodes.reverse().map((episode, index) => ({
      [`Episodio ${index + 1}`]: `https://tioanime.com/ver/${animeId}-${episode}`
    }));

    const nextEpisodeElement = $('span.next-episode span');
    const nextEpisode = nextEpisodeElement.text() || 'N/A';

    return {
      proximo_episodio: nextEpisode,
      episodios: episodeUrls
    };
  } catch (error) {
    console.error('Error al obtener los episodios:', error.message);
    return { error: `Error al procesar la solicitud: ${error.message}` };
  }
}

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!args[0]) throw `*\`🔗 Ingresa el link del anime para obtener información. Ejemplo:.\`*\n\n\`${usedPrefix + command} https://tioanime.com/anime/dungeon-meshi\``;

  let data = await getAnimeEpisodes(args[0]);
  if (data.error) throw data.error;

  let messageText = `• 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐞𝐩𝐢𝐬𝐨𝐝𝐢𝐨𝐬 𝐝𝐞𝐥 𝐚𝐧𝐢𝐦𝐞:\n\n`;

  for (const episode of data.episodios) {
    const [key, url] = Object.entries(episode)[0];
    const shortUrl = await getShortUrl(url); // Acortar el enlace aquí
    messageText += `${key}:\n   ❥Url: ${shortUrl}\n▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭\n`;
  }

  messageText += `\n𝐏𝐫ó𝐱𝐢𝐦𝐨 𝐞𝐩𝐢𝐬𝐨𝐝𝐢𝐨: ${data.proximo_episodio}`;

  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
}

handler.command = handler.help = ['animeinfo', 'animei'];
handler.tags = ['descargas'];
export default handler;