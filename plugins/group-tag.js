let handler = async (m, { conn, text, participants}) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
if (!m.quoted) return m.reply(`🍡 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐸 𝐴 𝑈𝑁 𝑀𝐸𝑁𝑆𝐴𝐽𝐸.`)
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
handler.help = ['tag']
handler.tags = ['group']
handler.command = /^(totag|tag)$/i
handler.admin = true
handler.group = true

export default handler
