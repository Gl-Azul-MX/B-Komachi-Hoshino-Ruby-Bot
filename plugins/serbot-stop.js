let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
  } else {
    await conn.reply(m.chat, `❣❥𝑆𝐸 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝑂 𝐿𝐴 𝑆𝐸𝑆𝐼𝑂𝑁 𝑆𝑈𝐵 𝐵𝑂𝑇💥`, m)
    conn.ws.close()
  }
}
handler.help = ['stop']
handler.tags = ['serbot']
handler.command = ['stop', 'stopbot', 'stopbebot']
handler.owner = true

export default handler
