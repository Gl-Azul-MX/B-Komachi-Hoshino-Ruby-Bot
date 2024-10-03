export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > 0) {
        await m.reply(`❎ 𝐷𝐸𝐽𝐴𝑆𝑇𝐸 𝐷𝐸 𝐸𝑆𝑇𝐴𝑅 *𝐴𝐹𝐾* 𝐷𝐸𝑆𝑃𝑈𝐸𝑆 𝐷𝐸 *${(new Date - user.afk).toTimeString()}.*`)
        user.afk = 0
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        await m.reply(`❎ 𝐸𝐿 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐴𝐿 𝑄𝑈𝐸 𝑀𝐸𝑁𝐶𝐼𝑂𝑁𝐴𝑆𝑇𝐸 𝐸𝑆𝑇𝐴𝑅 *𝐴𝐹𝐾* 𝑀𝑂𝑇𝐼𝑉𝑂: *${reason ? reason : '...'}* durante *${(new Date - afkTime).toTimeString()}*.`)
    }
    return true
              }
