import axios from 'axios';
let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '✧ Ingresa un texto para realizar la búsqueda.', m);
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
try {
    const { data } = await axios.get(`https://apis-starlights-team-cbb6f3a3.koyeb.app/starlight/tiktoksearch?text=${text}`);
    const results = data.data;
    if (!results.length) return conn.reply(m.chat, '❎𝑁𝑂 𝑆𝐸 𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝐴𝑅𝑂𝑁 𝑅𝐸𝑆𝑈𝐿𝑇𝐴𝐷𝑂𝑆.', m);
    const randomResult = getRandomElement(results);
    const videoUrl = randomResult.nowm;
    await conn.sendFile(m.chat, videoUrl, 'tts.mp4', `💥 *𝑇𝐼𝐾𝑇𝑂𝐾 𝑆𝐸𝐴𝑅𝐶𝐻💥*\n✰ *𝑅𝐸𝑆𝑈𝐿𝑇𝐴𝐷𝑂𝑆 𝑃𝐴𝑅𝐴:*\n> ${text}`, m);
} catch (error) {
    console.log(error);
}
};

handler.command = ['tts', 'tiktokvid', 'ttvid'];
handler.help = ['tiktoksearch <texto>'];
handler.registrado = true;
handler.diamantes = 1;
export default handler;
