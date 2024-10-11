import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch' 
let limit = 500

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, '💥 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞.\n\n`𝑬𝒋𝒓𝒎𝒑𝒍𝒐:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)

await m.react('🕓')
try {
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp4(args[0])

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `𝐄𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐩𝐞𝐬𝐚 𝐦𝐚𝐬 ${limit} 𝐌𝐁, 𝐒𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐠𝐚𝐫𝐠𝐚📤.`, m, rcanal).then(_ => m.react('✖️'))
	let txt = '`𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐌𝐏4 `\n\n'
       txt += `	➺   *𝐓𝐈𝐓𝐔𝐋𝐎* : ${title}\n`
       txt += `	➺   *𝐂𝐀𝐋𝐈𝐃𝐀𝐃* : ${quality}\n`
       txt += `	➺   *𝐓𝐀𝐌𝐀Ñ𝐎* : ${size}\n\n`
       txt += `> *- ⟳ 𝐄𝐬𝐭𝐨𝐲 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐭𝐮 𝐚𝐮𝐝𝐢𝐨 𝐞𝐬𝐩𝐞𝐫𝐚*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
await m.react('✅')
} catch {
await m.react('❎')
}}
handler.help = ['ytmp4 *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'ytv', 'yt']
//handler.limit = 1
handler.register = true 

export default handler

