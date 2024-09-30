import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('❌ 𝑖𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑒𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 𝑗𝑢𝑛𝑡𝑜 𝑎𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜🍡.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://drive.google.com/file/u/0/d/1-AV4MoowegNw6eS8bCZdwqn84_SPfQM0/view?usp=drivesdk&pli=1`)

try {
let { title, size, type, dl_url } = await Scraper.GDriveDl(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('𝐸𝑙 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑝𝑒𝑠𝑎 𝑚𝑎𝑠 𝑑𝑒 300𝑚𝑏, 𝑠𝑒 𝑐𝑎𝑛𝑐𝑒𝑙𝑜 𝑙𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎.')}
let txt = `╭⊱ 「 *GDrive Download* 」\n`
    txt += `│  ➪ *🧸 Nombre ∙* ${title}\n`
    txt += `│  ➪ *📦 MimeType ∙* ${type}\n`
    txt += `│  ➪ *🕹 Peso ∙* ${size}\n`
    txt += `╰⊱`
await m.reply(txt)
await conn.sendMessage(m.chat, { document: { url: dl_url }, fileName: title, mimetype: type }, { quoted: m })
} catch {
}}
handler.help = ['gdrive <url gdrive>']
handler.tags = ['downloader']
handler.command = ['gdrive']
handler.register = true
handler.limit = 500
export default handler
