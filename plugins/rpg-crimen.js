let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let users = global.db.data.users
  let senderId = m.sender
  let senderName = conn.getName(senderId)
  
  let tiempoEspera = 5 * 60
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`💸 𝒀𝑨 𝑪𝑶𝑴𝑬𝑻𝑰𝑺𝑻𝑬 𝑼𝑵 𝑪𝑹𝑰𝑴𝑬𝑵, 𝑬𝑺𝑷𝑬𝑹𝑨 *⏱ ${tiempoRestante}* 𝑷𝑨𝑹𝑨 𝑯𝑨𝑪𝑬𝑹 𝑶𝑻𝑹𝑶 𝑪𝑹𝑰𝑴𝑬𝑵, 𝑬𝑽𝑰𝑻𝑨 𝑺𝑬𝑹 𝑨𝑻𝑹𝑨𝑷𝑨𝑫𝑶.`)
    return
  }
  
  cooldowns[m.sender] = Date.now()
  
  let senderLimit = users[senderId].limit || 0

  let randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]

  while (randomUserId === senderId) {
    randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
  }

  let randomUserLimit = users[randomUserId].limit || 0

  let minAmount = 15
  let maxAmount = 50

  let amountTaken = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount

  let randomOption = Math.floor(Math.random() * 3)

  switch (randomOption) {
  case 0:
  users[senderId].limit = Math.min(senderLimit + amountTaken, maxAmount)
  users[randomUserId].limit = Math.max(randomUserLimit - amountTaken, 0)
  conn.sendMessage(m.chat, {
        text: `✅𝑪𝑶𝑴𝑬𝑻𝑰𝑺𝑻𝑬 𝑼𝑵 𝑪𝑹𝑰𝑴𝑬𝑵 𝑪𝑶𝑵 𝑬𝑿𝑰𝑻𝑶, 𝑹𝑶𝑩𝑨𝑺𝑻𝑬 *${amountTaken} 🍡 𝑪𝑨𝑹𝑨𝑴𝑬𝑳𝑶𝑺* a @${randomUserId.split("@")[0]}\n\n𝑺𝑬 𝑺𝑼𝑴𝑨𝑵*+${amountTaken} 🍡 𝑪𝑨𝑹𝑨𝑴𝑬𝑳𝑶𝑺* a ${senderName}.`,
  contextInfo: { 
  mentionedJid: [randomUserId],
  }
  }, { quoted: m })
  break

  case 1:
  let amountSubtracted = Math.min(Math.floor(Math.random() * (senderLimit - minAmount + 1)) + minAmount, maxAmount)
  users[senderId].limit = Math.max(senderLimit - amountSubtracted, 0)
  conn.reply(m.chat, `❎𝑷𝑶𝑹 𝑵𝑶 𝑺𝑬𝑹 𝑪𝑼𝑰𝑫𝑨𝑫𝑶𝑺𝑶 𝑻𝑬 𝑨𝑻𝑹𝑨𝑷𝑨𝑹𝑶𝑵 𝑪𝑶𝑴𝑬𝑻𝑰𝑬𝑵𝑫𝑶 𝑼𝑵 𝑪𝑹𝑰𝑴𝑬𝑵,𝑺𝑬 𝑹𝑬𝑺𝑻𝑨𝑵 *-${amountSubtracted} 🍡 𝑪𝑨𝑹𝑨𝑴𝑬𝑳𝑶𝑺* a ${senderName}.`, m)
  break

  case 2:
  let smallAmountTaken = Math.min(Math.floor(Math.random() * (randomUserLimit / 2 - minAmount + 1)) + minAmount, maxAmount)
  users[senderId].limit = Math.min(senderLimit + smallAmountTaken, maxAmount)
  users[randomUserId].limit = Math.max(randomUserLimit - smallAmountTaken, 0)
  conn.sendMessage(m.chat, {
  text: `💰 𝑪𝑶𝑴𝑬𝑻𝑰𝑺𝑻𝑬 𝑻𝑼 𝑪𝑹𝑰𝑴𝑬𝑵 𝑷𝑬𝑹𝑶 𝑻𝑬 𝑫𝑬𝑺𝑪𝑼𝑩𝑹𝑰𝑬𝑹𝑶𝑵, 𝑺𝑶𝑳𝑶 𝑳𝑶𝑮𝑹𝑨𝑺𝑻𝑬 𝑻𝑶𝑴𝑨𝑹 *${smallAmountTaken} 🍡 𝑪𝑨𝑹𝑨𝑴𝑬𝑳𝑶𝑺* de @${randomUserId.split("@")[0]}\n\n𝑺𝑬 𝑺𝑼𝑴𝑨𝑵 *+${smallAmountTaken} 🍡 𝑪𝑨𝑹𝑨𝑴𝑬𝑳𝑶𝑺* a ${senderName}.`,
  contextInfo: { 
  mentionedJid: [randomUserId],
  }
  }, { quoted: m })
  break
  }
  
  global.db.write()
}
handler.tags = ['rpg']
handler.help = ['crimen']
handler.command = ['crimen', 'crime']
handler.register = true
handler.group = true

export default handler

function segundosAHMS(segundos) {
  let horas = Math.floor(segundos / 3600)
  let minutos = Math.floor((segundos % 3600) / 60)
  let segundosRestantes = segundos % 60
  return `${minutos} minutos y ${segundosRestantes} segundos`
}
