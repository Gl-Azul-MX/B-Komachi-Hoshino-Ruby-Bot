let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `*💥𝑇𝑂𝑇𝐴𝐿 𝐷𝐸 𝐹𝑈𝑁𝐶𝐼𝑂𝑁𝐸𝑆* : ${totalf}`,m)
}

handler.help = ['totalfunciones']
handler.tags = ['main']
handler.command = ['totalfunciones']
handler.register = true
export default handler 
