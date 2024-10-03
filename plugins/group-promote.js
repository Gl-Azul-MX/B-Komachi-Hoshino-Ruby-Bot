let handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {
  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted)
    return conn.reply(
      m.chat,
      '𝑢𝑠𝑎 𝑒𝑙 𝑐𝑜𝑛𝑎𝑛𝑑𝑜 𝑐𝑜𝑟𝑟𝑒𝑐𝑡𝑎𝑚𝑒𝑛𝑡𝑒\n\n`𝑬𝒋𝒆𝒎𝒑𝒍𝒐 :`\n\n> . 𝑝𝑟𝑜𝑚𝑜𝑡𝑒 @Akane',
      m
    );
  if (number.length > 13 || (number.length < 11 && number.length > 0))
    return conn.reply(m.chat, `_. 𝐸𝐿 𝑁𝑈𝑀𝐸𝑅𝑂 𝐼𝑁𝐺𝑅𝐸𝑆𝐴𝐷𝑂 𝑁𝑂 𝐸𝑆 𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝑂💢,𝐼𝑁𝐺𝑅𝐸𝑆𝐴 𝐸𝐿 𝑁𝑈𝑀𝐸𝑅𝑂 𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝐴𝑀𝐸𝑁𝑇𝐸_`, m);

  try {
    if (text) {
      var user = number + "@s.whatsapp.net";
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + "@s.whatsapp.net";
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], "promote");
    conn.reply(m.chat, '𝑃𝐸𝑇𝐼𝐶𝐼𝑂𝑁 𝑅𝐸𝐶𝐼𝐵𝐼𝐷𝐴✅`, m);
  }
};
handler.help = ["*593xxx*", "*@usuario*", "*responder chat*"].map((v) => "promote " + v);
handler.tags = ["group"];
handler.command = /^(promote|daradmin|darpoder)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
