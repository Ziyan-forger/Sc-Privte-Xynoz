import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/cce6969c434b97d9c923c.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕╭─「_• Pulsa •_」\n│ • Telkomsel [085172402754]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [HUB OWNER]\n│ • Gopay [HUB OWNER]\n╰────\n\n_◛˖ Ingin Donasi? Chat nomor owner_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
