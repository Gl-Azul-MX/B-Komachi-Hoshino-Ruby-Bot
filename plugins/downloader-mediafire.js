import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🧸 𝐸𝐽𝐸𝐶𝑈𝑇𝐴 𝐸𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝐽𝑈𝑁𝑇𝑂 𝐴𝐿𝐴 𝑈𝑅𝐿 𝐷𝐸 𝐸𝐿 𝐴𝑅𝐶𝐻𝐼𝑉𝐼.\n\n`𝙀𝙅𝙍𝙈𝙋𝙇𝙊:`\n' + `> *${usedPrefix + command}* https://www.mediafire.com/file/433hbpsc95unywu/Oshi_no_Ko_01.mp4/file?dkey=jpivv6z5osa&r=1587`)
if (!args[0].match(/mediafire/gi)) return m.reply('El enlace deve ser de un archivo de Mediafire.')
try {
let { title, ext, aploud, size, dl_url } = await Scraper.mediafire(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('𝐸𝐿 𝐴𝑅𝐶𝐻𝐼𝑉𝑂 𝑃𝐸𝑆𝐴 𝑀𝐴𝑆 𝐷𝐸 300 𝑀𝐵, 𝑆𝐸 𝐶𝐴𝑁𝐶𝐸𝐿𝑂 𝐿𝐴 𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴.')}
let txt = `╭⊱『 *𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷 𝑀𝐸𝐷𝐼𝐴𝐹𝐼𝑅𝐸* 』✫\n`
    txt += `│  ✰ *💥 Nombre ∙* ${title}\n`
    txt += `│  ✰ *🔒 Subido ∙* ${aploud}\n`
    txt += `│  ✫ *📦 MimeType ∙* ${ext}\n`
    txt += `│  ✰ *💰 Peso ∙* ${size}\n`
    txt += `╰⊱`
await m.reply(txt)
await conn.sendFile(m.chat, dl_url, title, null, m, null, { mimetype: ext, asDocument: true })
} catch {
}}
handler.help = ['mediafire <url mf>']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mdfire', 'mf']
handler.register = true 
handler.limit = 500
export default handler
