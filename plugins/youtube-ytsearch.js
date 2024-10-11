import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, '❀𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐄𝐋 𝐓𝐈𝐓𝐔𝐋𝐎 𝐃𝐄 𝐋𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍 𝐎 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐀𝐒 𝐁𝐔𝐒𝐂𝐀𝐑❀ .\n\n`𝐸𝑗𝑒𝑚𝑝𝑙𝑜:`\n' + `> *${usedPrefix + command}* 𝐂𝐋𝐀𝐍𝐃𝐄𝐒𝐓𝐈𝐍𝐀-𝐑𝐄𝐌𝐈𝐗 𝐁𝐀𝐒𝐒`, m)
    let results = await Scraper.ytsearch(text)
    if (!results || !results.length) return conn.reply(m.chat, `No se encontraron resultados.`, m)
    let img = results[0].thumbnail
    let txt = `╭─✰「 *♫𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐒𝐄𝐀𝐑𝐂𝐇💥* 」✰\n`
    results.forEach((video, index) => {
        txt += ` │  ➺ *🎀 Nro ∙* ${index + 1}\n`
        txt += ` │  ➺ *🍡 Titulo ∙* ${video.title}\n`
        txt += ` │  ➺ *🕚 Duración ∙* ${video.duration}\n`
        txt += ` │  ➺ *📤 Publicado ∙* ${video.published}\n`
        txt += ` │  ➺ *💬 Autor ∙* ${video.author}\n`
        txt += ` │  ➺ *🔒 Url ∙* ${video.url}\n`
        txt += ` ╰─────✰`
        txt += `\n`
    })
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
}
handler.help = ['ytsearch <búsqueda>']
handler.tags = ['search']
handler.command = ['ytsearch', 'yts']
handler.register = true 
export default handler
