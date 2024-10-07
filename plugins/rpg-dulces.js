let handler = async (m, {conn, usedPrefix}) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return error 
   if (!(who in global.db.data.users)) return conn.reply(m.chat, '💢 𝐸𝐿 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝑁𝑂 𝑆𝐸 𝐸𝑁𝐶𝑈𝐸𝑁𝑇𝑅𝐴 𝐸𝑁 𝑀𝐼 𝐵𝐴𝑆𝐸 𝐷𝐸 𝐷𝐴𝑇𝑂𝑆.', m)
   let user = global.db.data.users[who]
   await m.reply(`${who == m.sender ? `𝑇𝑖𝑒𝑛𝑒𝑠 *${user.limit} 🍡 𝑐𝑎𝑟𝑎𝑚𝑒𝑙𝑜𝑠* 𝑒𝑛 𝑡𝑢 𝑐𝑎𝑟𝑡𝑒𝑟𝑎💰` : `𝐸𝑙 𝑢𝑠𝑢𝑎𝑟𝑖𝑜 @${who.split('@')[0]} 𝑡𝑖𝑒𝑛𝑒 *${user.limit}🍡 𝑐𝑎𝑟𝑎𝑚𝑒𝑙𝑜𝑠* 𝑒𝑛 𝑠𝑢 𝑐𝑎𝑟𝑡𝑒𝑟𝑎`}. `, null, { mentions: [who] })
}

handler.help = ['caramelos']
handler.tags = ['rpg']
handler.command = ['wallet', 'banco', 'caramelos', 'bal', 'coins']
handler.register = true 
export default handler
