import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🍭 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝑅 𝐷𝑅 𝐴𝐿𝐺𝑈𝑁𝐴 𝐶𝐴𝑁𝐶𝐼𝑂𝑁 𝑂 𝑇𝑅𝐴𝐶𝐾 𝐷𝐸 𝑆𝑃𝑂𝑇𝐼𝐹𝐼.\n\n`𝙀𝙅𝙀𝙈𝙋𝙇𝙊:`\n' + `> *${usedPrefix + command}* Gemini Aaliyah - If Only`)

let user = global.db.data.users[m.sender]
try {
let { title, artist, album, published, thumbnail, dl_url } = await Scraper.spotify(text)
let txt = `╭⊱『 *𝑆𝑃𝑂𝑇𝑂𝐹𝐼 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷* 』✰\n`
    txt += `│  ✰ *💬 Nombre ∙* ${title}\n`
    txt += `│  ✰ *💥 Artista ∙* ${artist}\n`
    txt += `│  ✰ *📼 Album ∙* ${album}\n`
    txt += `│  ✰ *🎀 Publicado ∙* ${published}\n`
    txt += `╰⊱,`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp3', `*🎲 Titulo ∙* ${title}\n*🎧 Artista ∙* ${artist}`, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
} catch {
}}
handler.help = ['spotify <búsqueda>']
handler.tags = ['downloader']
handler.command = ['spotify']
handler.register = true 
export default handler
