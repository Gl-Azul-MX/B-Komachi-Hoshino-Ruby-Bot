import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`❎𝑌𝐴 𝐸𝑆𝑇𝐴𝑆 𝐸𝑁 𝑀𝐼 𝐵𝐴𝑆𝐸 𝐷𝑅 𝐷𝐴𝑇𝑂𝑆.\n\n*❓𝐷𝐸𝑆𝐸𝐴𝑆 𝑉𝑂𝐿𝑉𝐸𝑅 𝐴 𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝐴𝑅𝑇𝐸*\n\n𝑈𝑆𝐴 𝐸𝑆𝑇𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝑃𝐴𝑅𝐴 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝑅 𝑇𝑈 𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝑂📜.\n*${usedPrefix}𝑢𝑛𝑟𝑒𝑔 * <𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑟𝑒𝑔𝑖𝑠𝑡𝑟𝑜>`)
  if (!Reg.test(text)) return m.reply(`❎𝑈𝑆𝑂 𝐼𝑁𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝑂.\n\n𝑈𝑆𝑂 𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝑂✅: *${usedPrefix + command} 𝑛𝑜𝑚𝑏𝑟𝑒.𝑒𝑑𝑎𝑑*\n𝐸𝐽𝐸𝑀𝑃𝐿𝑂  : *${usedPrefix + command} ${name2}.15*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🍡𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝑁𝑂 𝑇𝐼𝐸𝑁𝐸 𝑄𝑈𝐸 𝐸𝑆𝑇𝐴𝑅 𝑉𝐴𝐶𝐼𝑂.')
  if (!age) return m.reply('🍡𝐿𝐴 𝐸𝐷𝐴𝐷 𝑁𝑂 𝑇𝐼𝐸𝑁𝐸 𝑄𝑈𝐸 𝐸𝑆𝑇𝐴𝑅 𝑉𝐴𝐶𝐼𝐴.')
  if (name.length >= 100) return m.reply('❎ 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐸𝑆 𝑀𝑈𝑌 𝐿𝐴𝑅𝐺𝑂.' )
  age = parseInt(age)
  if (age > 100) return m.reply('🏳️‍🌈 𝐸𝐿 𝐴𝐵𝑈𝐸𝐿𝑂 𝑄𝑈𝐼𝐸𝑅𝐸 𝑈𝑆𝐴𝑅 𝐸𝐿 𝐵𝑂𝑇.')
  if (age < 5) return m.reply('🧸 𝑈𝑁 𝑁𝐼Ñ𝑂 𝑅𝐴𝑇𝐴. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let img = await (await fetch(`https://i.postimg.cc/k58gkKJ2/Ruby-Oshi-no-Ko.jpg`)).buffer()
  let txt = '`-𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝑂-𝑈𝑆𝑈𝐴𝑅𝐼𝑂-`\n\n'
      txt += `*o☆➺  *Nombre* : ${name}\n`
      txt += `*o☆➺  *Edad* : ${age} años\n`
      txt += `*o☆➺  *Numero de serie:*\n`
      txt += ` ${sn}`
await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
await m.react('🍡')
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler
