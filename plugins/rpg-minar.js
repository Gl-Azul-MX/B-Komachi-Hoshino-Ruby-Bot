const cooldowns = {}

let handler = async (m, { conn }) => {

  let amount = Math.floor(Math.random() * 20)
  const tiempoEspera = 5 * 60 // 5 minutos
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    const tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`❎ 𝑬𝑺𝑷𝑬𝑹𝑨 *${tiempoRestante}* 𝑷𝑨𝑹𝑨 𝑽𝑶𝑳𝑽𝑬𝑹 𝑨 𝑴𝑰𝑵𝑨𝑹.`)
    return
  }

  global.db.data.users[m.sender].limit += amount
  await m.reply(`𝑮𝑬𝑵𝑰𝑨𝑳✨,𝑴𝑰𝑵𝑨𝑺𝑻𝑬 *${amount} 🍡 𝑪𝑨𝑹𝑨𝑴𝑬𝑳𝑶𝑺*`)
  cooldowns[m.sender] = Date.now()
}
handler.help = ['minar']
handler.tags = ['rpg']
handler.command = ['minar', 'miming', 'mine'] 
handler.register = true 
export default handler

function segundosAHMS(segundos) {
  const minutos = Math.floor((segundos % 3600) / 60)
  const segundosRestantes = segundos % 60
  return `${minutos} minutos y ${segundosRestantes} segundos`
}
