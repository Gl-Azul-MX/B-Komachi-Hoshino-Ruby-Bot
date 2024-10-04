let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) return m.reply(`🍡 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐿𝑂 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴𝑆 𝐸𝑆𝐶𝑅𝐼𝐵𝐼𝑅 𝐸𝑁 𝑇𝑊𝐼𝑇𝑇𝐸𝑅.`)
const avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')
const displayName = conn.getName(m.sender)
const username = m.sender.split('@')[0]
const replies = '69' 
const retweets = '69' 
const theme = 'dark' 
const url = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayName)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`
conn.sendFile(m.chat, url, 'tweet.png', '*Gracias por comentar*', m)
}  
handler.help = ['tweet <comentario>']
handler.tags = ['logo']
handler.command = ['tweet']
handler.register = true 
export default handler
