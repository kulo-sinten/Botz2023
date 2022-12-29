import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/461038121ae177ae1f4e6.jpg`
    return conn.sendButton(m.chat, 'Donasi Pm Owner aja.\n❏  :v', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.ownerbotz",
                mediaType: "VIDEO",
                title: 'Donasi To Indra',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler