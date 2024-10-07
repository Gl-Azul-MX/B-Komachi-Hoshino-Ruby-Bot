import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, '💥 Ingresa el título de una canción de Spotify.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* clandestina-remix`, m)
  try {
    let Sumi = await Scraper.spotifySearch(text)
    let img = await (await fetch(`${Sumi[0].thumbnail}`)).buffer()
    let txt = `╭─✰『 *Spotify Search* 』✰\n`
    for (let i = 0; i < Sumi.length; i++) {
      txt += ` │  ➪ *🎧 Nro ∙* ${i + 1}\n`
      txt += ` │  ➪ *💥 Titulo ∙* ${Sumi[i].title}\n`
      txt += ` │  ➪ *🍡 Artista ∙* ${Sumi[i].artist}\n`
      txt += ` │  ➪ *⛓ Url ∙* ${Sumi[i].url}\n`
      txt += ` ╰──────────✰`
      txt += `\n`
    }
    
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
} catch {
}}
handler.help = ['spotifysearch <búsqueda>']
handler.tags = ['search']
handler.command = ['spotifysearch']
handler.register = true

export default handler

