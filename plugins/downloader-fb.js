import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('❌𝐸𝐽𝐸𝐶𝑈𝑇𝐸 𝐸𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝐴𝐺𝑅𝐸𝐺𝐴𝑁𝐷𝑂 𝐸𝐿 𝐸𝑁𝐿𝐴𝐶𝐸.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://www.facebook.com/official.trash.gang/videos/873759786348039/?mibextid=rS40aB7S9Ucbxw6v`)

try {
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: SD || HD }, caption: `*💥 𝑇𝐼𝑇𝑈𝐿𝑂 ∙* ${title}` }, { quoted: m})
} catch {
}}
handler.help = ['facebook <url fb>']
handler.tags = ['downloader']
handler.command = ['fb', 'fbdl', 'facebookdl', 'facebook']
handler.register = true 
//handler.limit = 1
export default handler
