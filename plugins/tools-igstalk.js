import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐷𝐸 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐷𝐸 𝐼𝐺.\n\n`𝑬𝑱𝑬𝑴𝑷𝑳𝑶:`\n' + `> *${usedPrefix + command}* 𝐻𝐴𝐼𝐾𝑂.𝑋𝑃`)

try {
let { username, name, post, followers, following, bio, thumbnail, url } = await Scraper.igstalk(text)
let txt = `╭─✰『 *𝐼𝑁𝑆𝑇𝐴𝐺𝑅𝐴𝑀 𝑆𝑇𝐴𝐿𝐾* 』✰\n`
    txt += `│  ≡◦ *🍡 Username ∙* ${username}\n`
    txt += `│  ≡◦ *💥 Nombre ∙* ${name}\n`
    txt += `│  ≡◦ *📜 Posts ∙* ${post}\n`
    txt += `│  ≡◦ *🧸 Seguidores ∙* ${followers}\n`
    txt += `│  ≡◦ *🕹 Seguidos ∙* ${following}\n`
    txt += `│  ≡◦ *📋 Bio∙* ${bio}\n`
    txt += `│  ≡◦ *⛓ Url∙* ${url}\n`
    txt += `╰─✰`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
} catch {
}}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = ['igstalk']
handler.register = true 
export default handler
