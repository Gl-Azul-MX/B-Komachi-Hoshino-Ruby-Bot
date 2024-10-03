import db from '../lib/database.js'

let buatall = 1
let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, command, DevMode }) => {
	let user = global.db.data.users[m.sender]
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 55)}`.trim()
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
		let who = m.fromMe ? conn.user.jid : m.sender
	    let username = conn.getName(who)
	    
	    let tiempoEspera = 15
	    
	    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `🍡 𝑌𝐴 𝐻𝐼𝐶𝐼𝑆𝑇𝐸 𝑈𝑁𝐴 𝐴𝑃𝑈𝐸𝑆𝑇𝐴, 𝐸𝑆𝑃𝐸𝑅𝐴 *⏱ ${tiempoRestante}* 𝑃𝐴𝑅𝐴 𝐴𝑃𝑂𝑆𝑇𝐴𝑅 𝑂𝑇𝑅𝐴 𝑉𝐸𝑍`, m, rcanal)
    return
  }
  
  cooldowns[m.sender] = Date.now()
	    
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, '💬 𝑖𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑛𝑢𝑚𝑒𝑟𝑜 𝑑𝑒  ' + `*𝑐𝑎𝑟𝑎𝑚𝑒𝑙𝑜𝑠 🍡*` + ' 𝑞𝑢𝑒 𝑞𝑢𝑖𝑒𝑟𝑒𝑠 𝑎𝑝𝑜𝑠𝑡𝑎𝑟 𝑐𝑜𝑛𝑡𝑟𝑎' + ` *𝑅𝑢𝑏𝑦 𝐻𝑜𝑠ℎ𝑖𝑛𝑜*` + `\n\n` + '`𝐸𝑗𝑒𝑚𝑝𝑙𝑜:`\n' + `> *${usedPrefix + command}* 120`, m, rcanal)

        if (user.limit >= count * 1) {
            user.limit -= count * 1
            if (Aku > Kamu) {
                conn.reply(m.chat, '`📜 𝑉𝑒𝑎𝑚𝑜𝑠 𝑞𝑢𝑒 𝑛𝑢𝑚𝑒𝑟𝑜𝑠 𝑡𝑖𝑒𝑛𝑒𝑛`\n\n'+ `➠ *🍡 𝐻𝑜𝑠ℎ𝑖𝑛𝑜 𝑅𝑢𝑏𝑦* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *𝑃𝐸𝑅𝐷𝐼𝑆𝑇𝐸* ${formatNumber(count)} 🍡 𝐶𝑎𝑟𝑎𝑚𝑒𝑙𝑜𝑠.`.trim(), m, rcanal)
            } else if (Aku < Kamu) {
                user.limit += count * 2
                conn.reply(m.chat, '`📜 𝑉𝑒𝑎𝑚𝑜𝑠 𝑞𝑢𝑒 𝑛𝑢𝑚𝑒𝑟𝑜𝑠 𝑡𝑖𝑒𝑛𝑒𝑛`\n\n'+ `➠ *🍡 𝐻𝑜𝑠ℎ𝑖𝑛𝑜 𝑅𝑢𝑏𝑦* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *𝐺𝐴𝑁𝐴𝑆𝑇𝐸* ${formatNumber(count * 2)} 🍡 𝐶𝐴𝑅𝐴𝑀𝐸𝐿𝑂𝑆.`.trim(), m, rcanal)
            } else {
                user.limit += count * 1
                conn.reply(m.chat, '`📜 𝑉𝑒𝑎𝑚𝑜𝑠 𝑞𝑢𝑒 𝑛𝑢𝑚𝑒𝑟𝑜𝑠 𝑡𝑖𝑒𝑛𝑒𝑛`\n\n'+ `➠ *🍡 𝐻𝑜𝑠ℎ𝑖𝑛𝑜 𝑅𝑢𝑏𝑦* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username} 𝑜𝑏𝑡𝑖𝑒𝑛𝑒𝑠 ${formatNumber(count * 1)} 🍡 𝑐𝑎𝑟𝑎𝑚𝑒𝑙𝑜𝑠.`.trim(), m, rcanal)
            }
        } else conn.reply(m.chat, `No tienes *${formatNumber(count)} 🍡 𝑐𝑎𝑟𝑎𝑚𝑒𝑙𝑜𝑠* 𝑐𝑎𝑛𝑡𝑖𝑑𝑎𝑑 𝑝𝑎𝑟𝑎 𝑎𝑝𝑜𝑠𝑡𝑎𝑟`.trim(), m, rcanal)
    
}
    
handler.help = ['apostar *<cantidad>*']
handler.tags = ['game']
handler.command = /^(apostar|casino)$/i
handler.register = true

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
