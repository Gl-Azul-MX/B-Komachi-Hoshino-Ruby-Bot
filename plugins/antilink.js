const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.reply(m.chat, `*💢 𝑆𝐸 𝐷𝐸𝑇𝐸𝐶𝑇𝑂 𝑈𝑁 𝐸𝑁𝐿𝐴𝐶𝐸*\n\n𝑁𝑂 𝑆𝐸 𝑃𝐸𝑅𝑀𝐼𝑇𝐸𝑁 𝐸𝑁𝐿𝐴𝐶𝐸𝑆 𝐷𝐸 𝐺𝑅𝑈𝑃𝑂𝑆 𝐴𝐺𝐸𝑁𝑂𝑆, 𝐿𝑂 𝑆𝐼𝐸𝑁𝑇𝑂 *@${m.sender.split('@')[0]}*  𝑆𝐸𝑅𝐴𝑆 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝐷𝑂❌ ${isBotAdmin ? '' : '\n\n𝐿𝐴 𝐵𝑂𝑇 𝑁𝑂 𝐸𝑆 𝐴𝐷𝑀𝐼𝑁𝐼𝑆𝑇𝑅𝐴𝐷𝑂𝑅𝐴 𝑁𝑂 𝑃𝑈𝐸𝐷𝐸 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝑅 :"v'}`, null, { mentions: [m.sender] } )
        if (isBotAdmin && chat.antiLink) {
        	await conn.sendMessage(m.chat, { delete: m.key })
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
}
