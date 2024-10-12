import fs from "fs"
async function handler(m, {usedPrefix}) {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./serbot/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./serbot/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`❎ 𝑁𝑂 𝐶𝑂𝑀𝑃𝐴𝑅𝑇𝐼𝑅 𝑇𝑈 𝑇𝑂𝐾𝐸𝑁 𝐶𝑂𝑁 𝑁𝐴𝐷𝐼𝐸.\n(>_<) 𝑇𝑈 𝑇𝑂𝐾𝐸𝑁 𝐸𝑆:`)
        await m.reply(token)
    } else {
        await m.reply(`❣❥𝑁𝑂 𝑇𝐼𝐸𝑁𝐸𝑆 𝑈𝑁 𝑇𝑂𝐾𝐸𝑁 𝐴𝐶𝑇𝐼𝑉𝑂.。..。.。.`)
    }
  }
  handler.command = ['token']
  handler.help = ['token']
  handler.tags = ['jadibot']
  handler.registrado = true
  handler.private = false
  export default handler
