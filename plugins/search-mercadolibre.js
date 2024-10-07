import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw m.reply(`*𝐹𝑂𝑅𝑀𝐴 𝐼𝑁𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝐴❎*\n*𝑬𝑱𝑬𝑴𝑷𝑳𝑶:*\n\n${usedPrefix + command} 𝐴𝐶𝐸𝐼𝑇𝐸 𝐸𝑁 𝑃𝑂𝐿𝑉𝑂`);
    let res = await mercado(text);
    let cap = `『 *𝑀𝐸𝑅𝐶𝐴𝐷𝑂 - 𝐿𝐼𝐵𝑅𝐸* 』\n\n`;
    const limit = 15;
    for (let i = 0; i < limit && i < res.length; i++) {
      let link = res[i].link.length > 30 ? res[i].link.substring(0, 30) + '...' : res[i].link;
      cap += `*• Nombre:* ${res[i].title}\n*• Estado:* ${res[i].state}\n*• Link:* ${res[i].link}\n`;
      cap += '\n' + '••••••••••••••••••••••••' + '\n';
    }
    m.reply(cap)
  } catch (error) {
   
  }
};
handler.help = ['mercadolibre <búsqueda>']
handler.tags = ['search']
handler.command = ['mercadolibre']
//handler.limit = 1
handler.register = true
export default handler;

async function mercado(query) {
  try {
    const url = `https://listado.mercadolibre.com.pe/${query}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const results = $('.ui-search-layout__item').map((i, element) => {
      const title = $(element).find('.ui-search-item__title').text();
      const state = $(element).find('.ui-search-item__group__element').last().text().trim();
      const link = $(element).find('a').attr('href');
      return {
        title,
        state,
        link
      };
    }).get();
    
    return results;
  } catch (error) {
   
  }
}
