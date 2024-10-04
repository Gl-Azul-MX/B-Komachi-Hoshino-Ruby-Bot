let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let response = args.join(' ').split('|')
if (!text) return m.reply(`💥 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜 𝑗𝑢𝑛𝑡𝑜 𝑎𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜.`)
try {
let res = `https://api.popcat.xyz/sadcat?text=${text}`
await conn.sendFile(m.chat, res, 'thumbnail.jpg', null, m)
} catch {
}}
handler.help = ['sadcat <texto>']
handler.tags = ['logo']
handler.command = ['sadcat', 'catsad']
//handler.limit = 1
handler.register = true 
export default handler
