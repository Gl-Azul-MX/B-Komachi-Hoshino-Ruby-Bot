import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑞𝑢𝑒 𝑒𝑠𝑡𝑎𝑠 𝑏𝑢𝑠𝑐𝑎𝑛𝑑𝑜.\n\n`𝑬𝒋𝒆𝒎𝒑𝒍𝒐:`\n' + `> *${usedPrefix + command}* 𝑅𝑢𝑏𝑦 𝐻𝑜𝑠ℎ𝑖𝑛𝑜 𝐼𝑐𝑜𝑛𝑠`)
try {
let { dl_url } = await Scraper.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', null, m)
} catch {
}}
handler.help = ['pinterest <búsqueda>']
handler.tags = ['img']
handler.command = ['pinterest']
handler.register = true 
//handler.limit = 1
export default handler
