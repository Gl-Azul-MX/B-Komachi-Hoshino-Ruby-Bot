let handler = async (m, { groupMetadata }) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   let nro = (100).getRandom()
   await m.reply(`@${who.split("@")[0]} 𝑒𝑠𝑡𝑎 ${nro}% 𝐻𝑜𝑟𝑛𝑦 💥.`, null, { mentions: [who] })
}

handler.help = ['horny']
handler.tags = ['fun']
handler.command = ['cekhorny', 'horny']

handler.group = true

export default handler
