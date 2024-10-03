let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	text = text.split(`|`)
	if (!text || text.length == 1) return conn.reply(m.chat, `🧸 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐿𝐴 𝑃𝑅𝐸𝐺𝑈𝑁𝑇𝐴 𝐽𝑈𝑁𝑇𝑂 𝐴 𝑆𝑈𝑆 𝑂𝑃𝐶𝐼𝑂𝑁𝐸𝑆.\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n*${usedPrefix + command}* 𝐷𝐴𝑁𝐼𝐸𝐿.𝑋𝑌𝑍 𝐸𝑆 𝐺𝐴𝑌🧸?|si|no`, m, rcanal)
	if (text.length > 1 && text.length < 3) return m.reply(`𝑀𝐼𝑁𝐼𝑀𝑂 *2* 𝑂𝑃𝐶𝐼𝑂𝑁𝐸𝑆.`)
	if (text.length > 13) return m.reply(`𝑀𝐴𝑋𝐼𝑀𝑂 *12* 𝑂𝑃𝐶𝐼𝑂𝑁𝐸𝑆`)
	let array = []
	text.slice(1).forEach(function(i) { array.push(i) })
	await conn.sendPoll(m.chat, text[0], array)
}
handler.tags = ['group']
handler.help = ['encuesta *<pregunta|opciones>*']
handler.command = ['encuesta', 'poll']
handler.group = true
handler.register = true 

export default handler
