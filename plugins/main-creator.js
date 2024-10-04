let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:✰❦𝐺𝐿 𝐴𝑍𝑈𝐿.𝑀𝑋💥;;\nFN:✰❦𝐺𝐿 𝐴𝑍𝑈𝐿.𝑀𝑋💥\nORG:✰❦𝐺𝐿 𝐴𝑍𝑈𝐿.𝑀𝑋💥\nTITLE:\nitem1.TEL;waid=526131051247:526131051247\nitem1.X-ABLabel:✰❦𝐺𝐿 𝐴𝑍𝑈𝐿.𝑀𝑋💥\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:✰❦𝐺𝐿 𝐴𝑍𝑈𝐿.𝑀𝑋💥\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
