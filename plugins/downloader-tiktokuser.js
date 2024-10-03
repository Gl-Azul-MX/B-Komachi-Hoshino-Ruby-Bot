import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.reply(m.chat, '🍡 𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐷𝐸 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴𝑆 𝐵𝑈𝑆𝐶𝐴𝑅.\n\n`𝑬𝑱𝑬𝑴𝑷𝑳𝑶:`\n' + `> *${usedPrefix + command}* HAIKO_xp`, m, rcanal)
  await m.react('🕓')
  try {
    let data = await Starlights.tiktokuser(text)

    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let video = data[i]

        let txt = '`𝑇𝐼𝐾𝑇𝑂𝐾 - 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷💥`\n\n'
            txt += `    ✰  *Nro* : ${video.nro}\n`
            txt += `    ✰  *Título* : ${video.title}\n`
            txt += `    ✰  *Autor* : ${video.author}\n`
            txt += `    ✰  *Duración* : ${video.duration} segundos\n`
            txt += `    ✰  *Vistas* : ${video.views}\n`
            txt += `    ✰  *Likes* : ${video.likes}\n`
            txt += `    ✰  *Comentarios* : ${video.comments_count}\n`
            txt += `    ✰  *Compartidos* : ${video.share_count}\n`
            txt += `    ✰  *Publicado* : ${video.published}\n`
            txt += `    ✰  *Descargas* : ${video.download_count}\n\n`
            txt += `> 🍡 ${textbot}`

        await conn.sendFile(m.chat, video.dl_url, `video_${i + 1}.mp4`, txt, m, null, rcanal)
      }
      await m.react('✅')
    } else {
      await m.react('✖️')
    }
  } catch {
    await m.react('✖️')
  }
}
handler.tags = ['downloader']
handler.help = ['tiktokuser *<usuario>*']
handler.command = ['tiktokuser', 'tiktokus']
handler.register = true

export default handler
