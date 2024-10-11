import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    if (!text) {
        return conn.reply(m.chat, '*❎𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨𝐧 𝐨 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐛𝐮𝐬𝐜𝐚𝐫*', m);
    }

    await m.react('🕚');
    let res = await yts(text);
    let play = res.videos[0];

    if (!play) {
        throw `Error: 𝐍𝐨 𝐬𝐞 𝐩𝐮𝐝𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫 𝐞𝐥 𝐯𝐢𝐝𝐞𝐨`;
    }

    let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

    let txt = `*:..｡o○☆𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫*:..｡o○☆`\n';
    txt += '╭─────────•◈•─────────╮\n';
    txt += `➼ *𝐓𝐢𝐭𝐮𝐥𝐨💥* : _${title}_\n`;
    txt += `➼ *𝐂𝐫𝐞𝐚𝐝𝐨🍡* : _${ago}_\n`;
    txt += `➼ *𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧🕚* : _${timestamp}_\n`;
    txt += `➼ *𝐕𝐢𝐬𝐢𝐭𝐚𝐬🧸* : _${views.toLocaleString()}_\n`;
    txt += `➼ *𝐋𝐢𝐧𝐤🔒* : _https://www.youtube.com/watch?v=${videoId}_\n`;
    txt += '╰──────── • ◆ • ──────────╯ \n';
    txt += '࿆ᬊ᭄𝐑𝐔𝐁𝐘━𝐇𝐎𝐒𝐇𝐈𝐍𝐎━𝐌𝐃⏤͟͟͞͞★';

    await conn.sendButton2(m.chat, txt, '. ', thumbnail, [
        ['𝐌𝐏3', `${usedPrefix}ytmp3 ${url}`],
        ['𝐌𝐏3 𝐃𝐎𝐂', `${usedPrefix}ytmp3doc ${url}`],
        ['𝐌𝐏4', `${usedPrefix}ytmp4 ${url}`], 
        ['𝐌𝐏4 𝐃𝐎𝐂', `${usedPrefix}ytmp4doc ${url}`]
        ], null, [['Canal', 'https://whatsapp.com/channel/0029Vaj67qQJUM2Wa5Ey3y1v']], m);

    await m.react('✅');
};

handler.help = ['play'];
handler.tags = ['downloader'] 
handler.command = ['play',];

export default handler;
