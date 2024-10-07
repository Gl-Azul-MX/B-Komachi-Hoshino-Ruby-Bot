import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`💥 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝑈𝑁𝐴 𝐼𝑀𝐴𝐺𝐸𝑁 𝐸 𝐼𝑁𝐺𝑅𝐸𝑆𝐸 𝑈𝑁 𝑇𝐸𝑋𝑇𝑂.`)
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Error`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', { asSticker: 1 })
}
handler.help = ['smeme <texto>']
handler.tags = ['sticker']
handler.command = ["smeme"]
handler.register = true 
export default handler
