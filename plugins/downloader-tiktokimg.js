import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('𝐸𝐽𝐸𝐶𝑈𝑇𝐴 𝐸𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝐽𝑈𝑁𝑇𝑂 𝐴𝐿𝐴 𝑈𝑅𝐿 𝐷𝐸 𝐸𝐿 𝑉𝐼𝐷𝐸𝑂 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴𝑆 𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝑅💥.\n\n`𝙀𝙟𝙚𝙢𝙥𝙡𝙤1:`\n' + `> *${usedPrefix + command}* https://www.instagram.com/reel/CijhxhAD53X/?igsh=amJqMDQ1cW9zOG9s`)

try {
let { dl_url } = await Scraper.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: null }, { quoted: m})
} catch {
}}
handler.help = ['instagram <url ig>']
handler.tags = ['downloader']
handler.command = ['ig', 'igdl', 'instagram']
handler.register = true 
//handler.limit = 1
export default handler
