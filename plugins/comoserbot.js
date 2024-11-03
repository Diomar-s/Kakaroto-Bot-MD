const handler = async (m, {conn}) => {
  m.reply(global.serbot);
};
handler.command = /^(comoserbot)$/i;
handler.tags =['main'] 
handler.help = ['comoserbot <covertirse en bot>'] 
export default handler;
global.serbot = ` 
*PARA SER UN BOT DEBES PONER LOS SIGUIENTES COMANDOS*

*COMANDOS QUE DEBES UTILIZAR*

*1ER Comando* _.serbot --code_ código de 8 dígitos
*2DO comando* _.serbot_ Un código qr 

Aviso
El .serbot --code es para el número que lo solicito
El .serbot es para escanear con otro teléfono 
`;


