let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return m.reply(`💥𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝐸𝑁𝐿𝐴𝐶𝐸 𝐷𝐸 𝐸𝐿 𝐺𝑅𝑈𝑃𝑂 .`)
let [_, code] = text.match(linkRegex) || []
if (!code) return m.reply('❎𝐸𝑁𝐿𝐴𝐶𝐸 𝐼𝑁𝑉𝐴𝐿𝐼𝐷𝑂.')
let res = await conn.groupAcceptInvite(code)
m.reply(`✅𝑀𝐸 𝑈𝑁𝐼 𝐴𝐿 𝐺𝑅𝑈𝑃𝑂 *${res}*`)
}
handler.help = ['join <link>']
handler.tags = ['owner']
handler.command = ['join', 'entrar'] 
handler.owner = true

export default handler
