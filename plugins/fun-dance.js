let handler = async (m, { conn, usedPrefix, command}) => {
let pp = 'https://tinyurl.com/26djysdo'
let pp2 = 'https://tinyurl.com/294oahv9'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.reply(m.chat, '💥 𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐴 𝐴𝐿 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐶𝑂𝑁 *@user*', m, rcanal)
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `*${name}*` + ' está bailando con' + ` *${name2}*` + ' (ﾉ^ヮ^)ﾉ*:・ﾟ✧' }, { quoted: m })
}
handler.help = ['dance *<@user>*']
handler.tags = ['fun']
handler.command = ['dance', 'bailar']
export default handler
