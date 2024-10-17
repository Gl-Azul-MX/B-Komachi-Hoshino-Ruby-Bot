const {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion, 
    MessageRetryMap,
    makeCacheableSignalKeyStore, 
    jidNormalizedUser,
    PHONENUMBER_MCC
   } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import fs from "fs"
import pino from 'pino'
import * as ws from 'ws'
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js'

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {
  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
	return m.reply(`❌𝕊𝕆𝕃𝕆 𝕊𝔼 ℙ𝕌𝔼𝔻𝔼 ℙ𝔼𝔻𝕀ℝ ℂ𝕆𝔻𝕀𝔾𝕆 𝔼ℕ 𝔼𝕃 𝔹𝕆𝕋 ℙℝ𝕁ℕℂ𝕀ℙ𝔸𝕃 wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix}code`)
}

  async function serbot() {

  let authFolderB = m.sender.split('@')[0]

    if (!fs.existsSync("./serbot/"+ authFolderB)){
        fs.mkdirSync("./serbot/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./serbot/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

const {state, saveState, saveCreds} = await useMultiFileAuthState(`./serbot/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

let conn = makeWASocket(connectionOptions)

if (methodCode && !conn.authState.creds.registered) {
    if (!phoneNumber) {
        process.exit(0);
    }
    let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
        process.exit(0);
    }

    setTimeout(async () => {
        let codeBot = await conn.requestPairingCode(cleanedNumber);
        codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
        let txt = ` –  *𝑆𝐸𝑅𝐵𝑂𝑇 - 𝑆𝑈𝐵𝐵𝑂𝑇-𝑅𝑈𝐵𝑌*\n\n`
            txt += `╭⊱ ➪  *𝑈𝑆𝐴 𝐸𝑆𝑇𝐸 𝐶𝑂𝐷𝐼𝐺𝑂 𝑃𝐴𝑅𝐴 𝑆𝐸𝑅 𝑆𝑈𝐵𝐵𝑂𝑇 𝐷𝐸 𝑅𝑈𝐵𝑌*\n`
            txt += `│  ➪  Pasos\n`
            txt += `│  ➪  *1* : 𝑃𝑅𝐸𝑆𝐼𝑂𝑁𝐸 𝐸𝑁 𝐿𝑂𝑆 3 𝑃𝑈𝑁𝑇𝑂𝑆\n`
            txt += `│  ➪  *2* : 𝑆𝐸𝐿𝐸𝐶𝐶𝐼𝑂𝑁𝐸 𝐿𝐴 𝑂𝑃𝐶𝐼Ó𝑁 𝐷𝐸 𝐷𝐼𝑆𝑃𝑂𝑆𝐼𝑇𝐼𝑉𝑂𝑆 𝑉𝐼𝑁𝐶𝑈𝐿𝐴𝐷𝑂𝑆\n`
            txt += `│  ➪  *3* : 𝑆𝐸𝐿𝐸𝐶𝐶𝐼𝑂𝑁𝐴 *𝑉𝐼𝑁𝐶𝑈𝐿𝐴𝑅 𝐶𝑂𝑁 𝐸𝐿 𝑁𝑈𝑀𝐸𝑅𝑂 𝐷𝐸 𝑇𝐸𝐿𝐸𝐹𝑂𝑁𝑂*\n` 
            txt += `╰⊱ ➪  *4* : 𝐸𝑆𝐶𝑅𝐼𝐵𝐸𝑆 𝑂 𝑃𝐸𝐺𝐴𝑆 𝐸𝐿 𝐶𝑂𝐷𝐼𝐺𝑂\n\n`
            txt += `*Nota:❗* 𝐸𝐿 𝐶𝑂𝐷𝐼𝐺𝑂 𝑆𝑂𝐿𝑂 𝐹𝑈𝑁𝐶𝐼𝑂𝑁𝐴 𝐶𝑂𝑁 𝐸𝐿 𝑁𝑈𝑀𝐸𝑅𝑂 𝐷𝐸 𝑇𝐸𝐿𝐸𝐹𝑂𝑁𝑂 𝑄𝑈𝐸 𝐸𝐽𝐸𝐶𝑈𝑇𝑂 𝐸𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂`
         await parent.reply(m.chat, txt, m, rcanal)
         await parent.reply(m.chat, codeBot, m, rcanal)
        rl.close()
    }, 3000)
}

conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)

          if (code !== DisconnectReason.connectionClosed) {
          parent.sendMessage(m.chat, { text: "Conexión perdida.." }, { quoted: m })
        } else {
        }
      }
    
    if (global.db.data == null) loadDatabase()

    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parent.reply(m.chat, args[0] ? 'Conectado con exito' : '✅𝐶𝑂𝑁𝐸𝑋𝐼𝑂𝑁 𝐸𝑋𝐼𝑇𝑂𝑆𝐴💥\n\n*𝑵𝑶𝑻𝑨❗:* 𝐸𝑆𝑇𝑂 𝐸𝑆 𝑇𝐸𝑀𝑃𝑂𝑅𝐴𝐿\n𝑆𝐼 𝐿𝐴 𝑆𝐸𝑆𝐼𝑂𝑁 𝑃𝑅𝐼𝑁𝐶𝐼𝑃𝐴𝐿 𝑆𝐸 𝐴𝑃𝐴𝐺𝐴 𝑂 𝑆𝐸 𝑅𝐸𝐼𝑁𝐼𝐶𝐼𝐴 𝐿𝑂𝑆 𝑆𝑈𝐵𝐵𝑂𝑇𝑆 𝐶𝑂𝑁𝐸𝐶𝑇𝐴𝐷𝑂𝑆 𝑇𝐴𝑀𝐵𝐼𝐸𝑁 𝐿𝑂 𝐻𝐴𝑅𝐴𝑁\n\n𝐸𝐿 𝑁𝑈𝑀𝐸𝑅𝑂 𝐷𝐸 𝐸𝐿 𝐵𝑂𝑇 𝑃𝑈𝐸𝐷𝐸 𝐶𝐴𝑀𝐵𝐼𝐴𝑅, 𝐺𝑈𝐴𝑅𝐷𝐴 𝐸𝑆𝑇𝐸 𝐸𝑁𝐿𝐴𝐶𝐸:\n*-*https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K/450 ', m, rcanal)
    await sleep(5000)
    if (args[0]) return
    
		await parent.reply(conn.user.jid, `💥𝑃𝐴𝑅𝐴 𝑉𝑂𝐿𝑉𝐸𝑅 𝐴 𝑅𝐸𝐶𝑂𝑁𝐸𝐶𝑇𝐴𝑅 𝐸𝐿 𝑆𝑈𝐵𝐵𝑂𝑇 𝐸𝑁 𝐶𝐴𝑆𝑂 𝐷𝐸 𝑄𝑈𝐸 𝑆𝐸 𝐴𝑃𝐴𝐺𝑈𝐸 𝐸𝑁𝑉𝐼𝐴 𝐸𝐿 𝑆𝐼𝐺𝑈𝐼𝐸𝑁𝑇𝐸 𝑀𝐸𝑁𝑆𝐴𝐽𝐸💬 `, m, rcanal)
		
		await parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./serbot/" + authFolderB + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
	  }
 
  }

  const timeoutId = setTimeout(() => {
        if (!conn.user) {
            try {
                conn.ws.close()
            } catch {}
            conn.ev.removeAllListeners()
            let i = global.conns.indexOf(conn)
            if (i >= 0) {
                delete global.conns[i]
                global.conns.splice(i, 1)
            }
            fs.rmdirSync(`./serbot/${authFolderB}`, { recursive: true })
        }
    }, 30000)
	
let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}

if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
serbot()

}
handler.help = ['code']
handler.tags = ['serbot']
handler.command = ['code', 'codebot']
handler.rowner = false

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
        }
