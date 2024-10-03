let handler = async (m, { conn, participants, usedPrefix, command, isROwner }) => {
	
let kickte = `❗𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐴 𝐴𝐿 𝑈𝑆𝑈𝐴𝑅𝐼𝑂❗.`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝐷𝑂✅.`)
}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
