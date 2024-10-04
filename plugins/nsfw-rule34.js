import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return m.reply(`𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂 𝐸𝑆𝑇𝐴𝑁 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝐴𝐷𝑂𝑆 𝐿𝑂𝑆 𝐶𝑂𝑀𝐴𝑁𝐷𝑂𝑆 *𝑵𝑺𝑭𝑾.*`)
if (!text) return m.reply('𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐷𝐸 𝐿𝐴 𝐼𝑀𝐴𝐺𝐸𝑁 𝑄𝑈𝐸 𝐸𝑆𝑇𝐴𝑆 𝐵𝑈𝑆𝐶𝐴𝑁𝐷𝑂 𝐸𝑁 𝐿𝐴 𝑅𝑈𝐿𝐸 .')
try {
let { dl_url } = await Scraper.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', null, m)
} catch {
}}
handler.help = ['rule34 <búsqueda>']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
handler.limit = 20
handler.group = true 
export default handler
