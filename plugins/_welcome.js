import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.postimg.cc/MpX3GGRb/ub-o-h-no.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `╭⊱❤⊱╮꧁ ꧂╭⊱❤≺ *${botname}* \n│『 𝐵𝐼𝐸𝑁𝑉𝐸𝑁𝐼𝐷𝑂⋆ 』\n•——————•°•✿•°•——————• 『 @${m.messageStubParameters[0].split`@`[0]} 』\n   │✑  𝐵𝐼𝐸𝑁𝑉𝐸𝑁𝐼𝐷𝑂\n   │✑  ${groupMetadata.subject}\n   0:58 ━━❍─────── 3:35 ⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `❤⊱╮꧁ ꧂╭⊱❤≺ *${botname}* \n│『 𝐴𝐷𝐼𝑂𝑆 』\n•——————•°•✿•°•——————• 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  \n   │✑ 𝑁𝑂 𝑉𝐼𝐸𝐿𝑉𝐴𝑆 ɲʈ⋆   ✧･ﾟ: *✧･ﾟ:* 　💥　*:･ﾟ✧*:･ﾟ✧ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `╭⊱❤⊱╮꧁ ꧂╭⊱❤≺ *${botname}* \n│『 𝐻𝐴𝑆𝑇𝐴 𝐿𝑈𝐸𝐺𝑂 』\n•——————•°•✿•°•——————• 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  \n   │✑ 𝐴𝐷𝐼𝑂𝑆   0:58 ━━❍─────── 3:35⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
