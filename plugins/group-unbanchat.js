let handler = async (m, { conn, isAdmin, isROwner} ) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('𝐶𝐻𝐴𝑇 𝐷𝐸𝑆𝐵𝐴𝑁𝐸𝐴𝐷𝑂✅.')   
}
handler.help = ['desbanearbot']
handler.tags = ['group']
handler.command = ['desbanearbot', 'unbanchat']
handler.group = true 
export default handler
