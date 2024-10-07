import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '🍡 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑇𝐸𝑋𝑇𝑂 𝐷𝐸 𝐿𝐴 𝑃𝑈𝐵𝐿𝐼𝐶𝐴𝐶𝐼𝑂𝑁 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴𝑆 𝐵𝑈𝑆𝐶𝐴𝑅.', m, rcanal)
await m.react('⌛')
try {
let json = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/Twitter-Posts?text=${text}`, { headers: { 'Content-Type': 'application/json' }})
let result = json.data.result
if (!result || !result.length) return conn.reply(m.chat, `No se encontraron resultados.`, m, rcanal)
        
let txt = '`- 𝑻 𝑾 𝑰 𝑻 𝑻 𝑬 𝑹 - 𝑺𝑬𝑨𝑹𝑪𝑯`'
    result.forEach(({ user, post, profile, user_link }, index) => {
    txt += `\n\n`
    txt += `  *💥 Nro* : ${index + 1}\n`
    txt += `  *👪 User* : ${user}\n`
    txt += `  *🌅 Publicacion* : ${post}\n`
    txt += `  *💬 Perfil* : ${profile}\n`
    txt += `  *🏷📜 Link* : ${user_link}`
    })
await conn.reply(m.chat, txt, m, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['tweetposts *<búsqueda>*']
handler.tags = ['search']
handler.command = ['twittersearch']
handler.register = true 

export default handler
