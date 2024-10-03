import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) return m.react('✖️')
    if (!('participants' in groupMetadata)) return m.react('✖️')
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) return m.reply('*❎𝑁𝑜 𝑠𝑜𝑦 𝑝𝑎𝑟𝑡𝑒 𝑑𝑒 𝑒𝑠𝑒 𝑔𝑟𝑢𝑝𝑜 :(*')
    if (!me.admin) return m.reply('*❎𝐿𝑎 𝑏𝑜𝑡 𝑛𝑜 𝑒𝑠 𝑎𝑑𝑚𝑖𝑛𝑖𝑠𝑡𝑟𝑎𝑑𝑜𝑟𝑎*')
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['link']
handler.tags = ['group']
handler.command = ['link', 'linkgroup'] 
handler.group = true 
export default handler
