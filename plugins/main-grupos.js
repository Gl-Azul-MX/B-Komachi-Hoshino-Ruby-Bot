import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.postimg.cc/kgKsZF74/avatar-contac.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*𝐻𝑜𝑙𝑎, 𝑢𝑛𝑒𝑡𝑒 𝑎 𝑙𝑜𝑠 𝑔𝑟𝑢𝑝𝑜𝑠 𝑜𝑓𝑖𝑐𝑖𝑎𝑙𝑒𝑠 𝑑𝑒 𝑙𝑎 𝑏𝑜𝑡*

> 🍡 𝐸𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑒𝑙 𝑔𝑟𝑢𝑝𝑜 𝑑𝑒 𝑅𝑢𝑏𝑦 𝐻𝑜𝑠ℎ𝑖𝑛𝑜

*🎌* ${group}

*༺♥༻❀༺♥༻💕﻿༺♥༻❀༺♥༻

> 📫 Enlace anulado? entre aquí! 

Canal :
*🏷️* ${canal}

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
