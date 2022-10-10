let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/cce6969c434b97d9c923c.jpg'
let text = `⟨───[ Sewa Bot & Premium]───⟩

┌〔 Harga Sewa 〕
│
├ 31 ʜᴀʀɪ 5ᴋ / ɢʀᴏᴜᴘ
├ Permanent 10ᴋ / ɢʀᴏᴜᴘ
│
└────ITSUKI - MD ₪

┌〔 Harga Premium 〕
│
├ 160 ʜᴀʀɪ 5ᴋ 
├ Permanent 8ᴋ 
└────ITSUKI - MD ₪

┌〔 ꜰɪᴛᴜʀ 599+ 〕
│
├ ᴡᴇʟᴄᴏᴍᴇ
├ ᴋɪᴄᴋ
├ ᴀɴᴛɪʟɪɴᴋ
├ ꜱᴛɪᴋᴇʀ
├ ꜱᴏᴜɴᴅ
├ ᴀɴɪᴍᴇ
├ ᴅʟʟ
│-
└────ITSUKI - MD ₪
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/6285172402754'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot)$/i

export default handler
