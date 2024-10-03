import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('❎ 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝐸𝑁𝐿𝐴𝐶𝐸 𝐽𝑈𝑁𝑇𝑂 𝐴𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://github.com/StarlightsTeam/Ai-Hoshino.git`)
try {
if (!regex.test(args[0])) return `𝐿𝐴 𝑈𝑅𝐿 𝐸𝑆 𝐼𝑀𝑉𝐴𝐿𝐼𝐷𝐴❌.`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
await conn.sendFile(m.chat, url, filename, null, m)
} catch {
}}
handler.help = ['gitclone <url git>']
handler.tags = ['downloader']
handler.command = ['gitclone'] 
handler.register = true 
//handler.limit = 1
export default handler
