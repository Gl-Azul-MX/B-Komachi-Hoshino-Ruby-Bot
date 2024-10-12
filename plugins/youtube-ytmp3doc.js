import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
let limit = 200

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) return star.reply(m.chat, '𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞.\n\n`𝑬𝒋𝒆𝒎𝒑𝒍𝒐:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, `𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚 𝐪𝐮𝐞 𝐞𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 𝐬𝐞𝐚 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞.`, m, rcanal).then(_ => m.react('❎'))
let q = '128kbps'

await m.react('🕚')
try {
let v = args[0]
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let title = await yt.title
let size = await yt.audio[q].fileSizeH
let thumbnail = await yt.thumbnail

let img = await (await fetch(`${thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `𝐄𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐩𝐞𝐬𝐚 𝐦𝐚𝐬 𝐝𝐞 ${limit} 𝐌𝐁, s𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚.`, m, rcanal).then(_ => m.react('❎'))
	let txt = '`🎀𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐌𝐏3𝐃𝐎𝐂🎀`\n\n'
       txt += `	➺   *𝐓𝐈𝐓𝐔𝐋𝐎* : ${title}\n`
       txt += `	➺   *𝐂𝐀𝐋𝐈𝐃𝐀𝐃* : ${q}\n`
       txt += `	➺   *𝐓𝐀𝐌𝐀Ñ𝐎* : ${size}\n\n`
       txt += `> *- ⟳ 𝐄𝐬𝐭𝐨𝐲 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐭𝐮 𝐚𝐮𝐝𝐢𝐨,𝐞𝐬𝐩𝐞𝐫𝐚 𝐮𝐧 𝐩𝐨𝐜𝐨*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.yta(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let img = await (await fetch(`${vid.thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `𝐄𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐩𝐞𝐬𝐚 𝐦𝐚𝐬 𝐝𝐞 ${limit} 𝐌𝐁, 𝐬𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚.`, m, rcanal).then(_ => m.react('❎'))
	let txt = '`🎀𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐌𝐏3𝐃𝐎𝐂🎀`\n\n'
       txt += `	➺   *𝐓𝐈𝐓𝐔𝐋𝐎* : ${title}\n`
       txt += `	➺   *𝐂𝐀𝐋𝐈𝐃𝐀𝐃* : ${q}\n`
       txt += `	➺   *𝐓𝐀𝐌𝐀Ñ𝐎* : ${size}\n\n`
       txt += `> *- ⟳ 𝐄𝐬𝐭𝐨𝐲 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐭𝐮 𝐚𝐮𝐝𝐢𝐨,𝐞𝐬𝐩𝐞𝐫𝐚 𝐮𝐧 𝐩𝐨𝐜𝐨*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(args[0], q)
let { title, dl_url, size, thumb } = yt 

let img = await (await fetch(`${thumb}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `𝐄𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐩𝐞𝐬𝐚 𝐦𝐚𝐬 𝐝𝐞 ${limit} 𝐌𝐁, 𝐬𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐨 𝐥𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚.`, m, rcanal).then(_ => m.react('❎'))
	let txt = '`🎀𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐌𝐏3𝐃𝐎𝐂🎀`\n\n'
       txt += `	➺   *𝐓𝐈𝐓𝐔𝐋𝐎* : ${title}\n`
       txt += `	➺   *𝐂𝐀𝐋𝐈𝐃𝐀𝐃* : ${q}\n`
       txt += `	➺   *𝐓𝐀𝐌𝐀Ñ𝐎* : ${size}\n\n`
       txt += `> *- ⟳ 𝐄𝐬𝐭𝐨𝐲 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐭𝐮 𝐚𝐮𝐝𝐢𝐨,𝐞𝐬𝐩𝐞𝐫𝐚 𝐮𝐧 𝐩𝐨𝐜𝐨*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}}}
handler.help = ['ytmp3doc *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp3doc', 'ytadoc'] 
//handler.limit = 1
handler.register = true 

export default handler
