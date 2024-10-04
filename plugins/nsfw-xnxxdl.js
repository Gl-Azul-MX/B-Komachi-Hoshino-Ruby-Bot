import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return m.reply(`𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂 𝑇𝐼𝐸𝑁𝐸 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝐴𝐷𝑂𝑆 𝐿𝑂𝑆 𝐶𝑂𝑀𝐴𝑁𝐷𝑂𝑆 *𝑵𝑺𝑭𝑾.*`)
if (!args[0]) return m.reply('𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝐸𝑁𝐿𝐴𝐶𝐸 𝐷𝐸 𝐸𝐿 𝑉𝐼𝐷𝐸𝑂 𝑋𝑁𝑋𝑋 𝐽𝑈𝑁𝑇𝑂 𝐴𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂.')

let user = global.db.data.users[m.sender]
try {
let { title, duration, quality, dl_url } = await Scraper.xnxxdl(args[0])
let txt = `╭─✰『 *Xnxx Download* 』✰\n`
    txt += `│  ➪ *🍡 Titulo ∙* ${title}\n`
    txt += `│  ➪ *🧸 Calidad ∙* ${quality}\n`
    txt += `│  ➪ *🕜 Duración ∙* ${duration}\n`
    txt += `╰─✰`
await m.reply(txt)
await conn.sendFile(m.chat, dl_url, title + '.mp4', `*🍭 Titulo ∙* ${title}\n*🧸 Calidad ∙* ${quality}`, m, false, { asDocument: user.useDocument })
} catch {
}}
handler.help = ['xnxxdl <url>']
handler.tags = ['nsfw']
handler.command = ['xnxxdl']
handler.register = true 
handler.group = true 
handler.limit = 500
export default handler
