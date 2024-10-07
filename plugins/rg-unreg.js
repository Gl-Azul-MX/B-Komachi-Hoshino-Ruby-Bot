import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) return m.reply(`❎ 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝑇𝑈 𝑁𝑈𝑀𝐸𝑅𝑂 𝐷𝐸 𝑆𝐸𝑅𝐼𝐸 𝐽𝑈𝑁𝑇𝑂 𝐴𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂.`)
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) return m.reply('❎ 𝑁𝑈𝑀𝐸𝑅𝑂 𝐷𝐸 𝑆𝐸𝑅𝐼𝐸 𝐼𝑁𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝑂')
  user.registered = false
  m.reply(`✅ 𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝑂 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝐷𝑂.`)
}
handler.help = ['unreg'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler
