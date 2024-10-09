import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': '𝐼𝑛𝑓𝑜',
  'search': '𝐵𝑢𝑠𝑞𝑢𝑒𝑑𝑎𝑠 🔎',
  'game': '𝐽𝑢𝑒𝑔𝑜𝑠🎳',
  'serbot': '𝑆𝑢𝑏 𝐵𝑜𝑡𝑠 🕹',
  'rpg': '𝑅𝑃𝐺 🌅',
  'rg': '𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑜 𝑈𝑠𝑒𝑟👪',
  'sticker': '𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑠 🎭',
  'img': '𝐼𝑚𝑎𝑔𝑒𝑛𝑒𝑠 🎥',
  'group': '𝐺𝑟𝑢𝑝𝑜𝑠 💸',
  'logo': '𝐿𝑜𝑔𝑜𝑠-𝑀𝑎𝑘𝑒𝑟📋',
  'nable': '𝑂𝑛 / 𝑂𝑓𝑓📜', 
  'downloader': '𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑠 📥',
  'tools': '𝐻𝑒𝑟𝑟𝑎𝑚𝑖𝑒𝑛𝑡𝑎𝑠',
  'fun': '𝐷𝑖𝑣𝑒𝑟𝑠𝑖𝑜𝑛 📦',
  'nsfw': '+18 𝑁𝑆𝐹𝑊 ', 
  'owner': '𝑂𝑤𝑛𝑒𝑟 💵', 
  'audio': '𝐴𝑢𝑑𝑖𝑜𝑠📤', 
  'advanced': '𝐴𝑣𝑎𝑛𝑧𝑎𝑑𝑜⚛',
}

const defaultMenu = {
  before: `
（￣▽￣）🇬 🇱  🇦 🇿 🇺 🇱 .🇲 🇽 

“ 𝐇𝐎𝐋𝐀 *%name*, 𝐐𝐔𝐄 𝐓𝐀𝐋 𝐓𝐔 𝐃𝐈𝐀?
𝐒𝐎𝐘 𝐑𝐔𝐁𝐘 𝐇𝐎𝐒𝐇𝐈𝐍𝐎”

┍──━──━──『 *𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑* 』❦
│ ➪☪ Nombre ∙* %name
│ ➪🍡 Caramelos ∙* %limit
│ ➪✨ XP ∙* %totalexp
│ ➪🎖 Nivel ∙* %level
┕━━━━━━
%readmore
＊✿❀○❀✿＊**＊✿❀○❀✿＊

\t\t\t*𝐿𝐼𝑆𝑇𝐴 - 𝑀𝐸𝑁𝑈*
`.trimStart(),
header: '╭⊱「 *%category* 」',
body: '│  ➪ *%cmd*\n',
footer: '╰⊱\n',
after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '' : '')
                .replace(/%isPremium/g, menu.premium ? '' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = './storage/img/miniurl.jpg'
    await conn.sendFile(m.chat, pp, 'thumbnail.jpg', text.trim(), m, null, rcanal)

  } catch (e) {
    conn.reply(m.chat, '𝐿𝑜 𝑠𝑒𝑛𝑡𝑖𝑚𝑜𝑠, 𝑒𝑙 𝑚𝑒𝑛𝑢 𝑒𝑠𝑡𝑎 𝑓𝑎𝑙𝑙𝑎𝑛𝑑𝑜.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true 
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
