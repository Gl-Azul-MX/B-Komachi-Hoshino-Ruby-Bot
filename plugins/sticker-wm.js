import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
  if (!m.quoted) return m.reply(`💥 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴 𝑈𝑁 𝑆𝑇𝐼𝐶𝐾𝐸𝑅.`)
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return m.reply(`💥 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴 𝑈𝑁 𝑆𝑇𝐼𝐶𝐾𝐸𝑅.`)
    let img = await m.quoted.download()
    if (!img) return m.reply(`💥 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴 𝑈𝑁 𝑆𝑇𝐼𝐶𝐾𝐸𝑅.`)
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m)
    else return m.reply(`🍭 Responde al Sticker.`)
  }
}
handler.help = ['wm <nombre>|<autor>']
handler.tags = ['sticker']
handler.command = ['take', 'robar', 'wm'] 
handler.register = true 
export default handler
