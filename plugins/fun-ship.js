var handler = async (m, { conn, command, text }) => {

if (!text) return conn.reply(m.chat, `🧸 *𝐸𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎 2 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑠 𝑝𝑎𝑟𝑎 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑟 𝑠𝑢 𝑎𝑚𝑜𝑟*`, m)
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `🧸 *𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐴 𝐴𝐿𝐴 𝑆𝐸𝐺𝑈𝑁𝐷𝐴 𝑃𝐸𝑅𝑆𝑂𝑁𝐴*`, m)
let love = `❤️ *${text1}* 𝑇𝑈 𝑂𝑃𝑂𝑅𝑇𝑈𝑁𝐼𝐷𝐴𝐷 𝐷𝐸 𝐸𝑁𝐴𝑀𝑂𝑅𝐴𝑅𝑇𝐸   *${text2}* 𝐸𝑆 𝐷𝐸 *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻`

m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^(ship)$/i

handler.register = true

export default handler
