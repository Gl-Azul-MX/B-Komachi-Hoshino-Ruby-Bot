let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) return m.reply('❎ 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐿𝐴 𝐶𝐴𝑁𝑇𝐼𝐷𝐴𝐷 𝐷𝐸  *🍡 𝐶𝐴𝑅𝐴𝑀𝐸𝐿𝑂𝑆* 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴𝑆 𝐴𝑃𝑂𝑆𝑇𝐴𝑅.\n\n`𝑬𝑱𝑬𝑴𝑷𝑳𝑶:`\n' + `> *${usedPrefix + command}* 10`)
    if (isNaN(args[0])) return m.reply('❎ 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐿𝐴 𝐶𝐴𝑁𝑇𝐼𝐷𝐴𝐷 𝐷𝐸  *🍡 𝐶𝐴𝑅𝐴𝑀𝐸𝐿𝑂𝑆* 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴𝑆 𝐴𝑃𝑂𝑆𝑇𝐴𝑅.\n\n`𝑬𝑱𝑬𝑴𝑷𝑳𝑶:`\n' + `> *${usedPrefix + command}* 10`)
    let apuesta = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    
    let tiempoEspera = 15
	    
	    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`💬 𝐸𝑆𝑃𝐸𝑅𝐴 *${tiempoRestante}* 𝑃𝐴𝑅𝐴 𝐴𝑃𝑂𝑆𝑇𝐴𝑅 𝐷𝐸 𝑁𝑈𝐸𝑉𝑂.`)
    return
  }

    let emojis = ["🍡", "🍉", "🍓"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `𝐴𝑐𝑎𝑏𝑎𝑠 𝑑𝑒 𝑔𝑎𝑛𝑎𝑟💥   *${apuesta} 🍡 caramelos.*`
        users.limit += apuesta
    } else if (a == b || a == c || b == c) {
        end = `𝑐𝑎𝑠𝑖 𝑙𝑜 𝑙𝑜𝑔𝑟𝑎𝑠, 𝑖𝑛𝑡𝑒𝑛𝑡𝑎 𝑑𝑒 𝑛𝑢𝑒𝑣𝑜💬 :) \nTen *1 🍡 caramelo.*`
        users.limit += 1
    } else {
        end = `ℎ𝑎𝑠 𝑝𝑒𝑟𝑑𝑖𝑑𝑜🧸  *${apuesta} 🍡 caramelos.*`
        users.limit -= apuesta
    }
    cooldowns[m.sender] = Date.now()
    return await conn.reply(m.chat,
        `
  🎰 | *SLOTS* 
──────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
────────── 

${end}`, m) 
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot']
handler.register = true
handler.group = false 
export default handler

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}
