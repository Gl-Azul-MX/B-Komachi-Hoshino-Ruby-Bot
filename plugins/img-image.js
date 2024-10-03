import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🧸 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐷𝐸 𝐿𝐴 𝐼𝑀𝐴𝐺𝐸𝑁 𝑄𝑈𝐸 𝐵𝑈𝑆𝐶𝐴𝑆.\n\n`𝑬𝑱𝑬𝑴𝑷𝑳𝑶:`\n' + `> *${usedPrefix + command}* Ruby hoshino icons`)
try {
let { dl_url } = await Scraper.GoogleImage(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', null, m)
} catch {
}}
handler.help = ['imagen <búsqueda>']
handler.tags = ['img']
handler.command = ['image', 'gimage', 'imagen']
handler.register = true 
//handler.limit = 1
export default 
