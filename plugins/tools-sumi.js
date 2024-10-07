import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*💥Escribe tu preticion*\n*🧸 Ejemplo:*\n> ${usedPrefix + command} como hacer un barco de papel`, m, rcanal)
await m.react('📖')
try {
let { msg } = await Starlights.openAi(text)
await conn.reply(m.chat, msg, m)
} catch {
}}
handler.help = ['ai *<petición>*']
handler.tags = ['tools']
handler.command = /^(sumi|ai|ia|chatgpt|gpt)$/i
handler.register = true
export default handler
