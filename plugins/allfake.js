import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://i.postimg.cc/MpX3GGRb/ub-o-h-no.jpg`)).buffer()
let img = catalogo
 global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363283921434745@newsletter",
      serverMessageId: 100,
      newsletterName: '𝑵𝑨𝑲𝑨𝑵𝑶 𝑻𝑬𝑨𝑴ꨄ',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://i.postimg.cc/GtzGyGhc/ANIME-OSHI-NO-KO-EP-1.jpg',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}
