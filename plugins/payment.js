import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/cce6969c434b97d9c923c.jpg'
	conn.sendButton(m.chat, '╭─「_• Pulsa •_」\n│ • Telkomsel [085172402754]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [HUB OWNER]\n│ • Gopay [HUB OWNER]\n╰────\n\n_Note : Krm Bukti Transfer Ke Owner Jika Sudah Melakukan Pembayaran!!_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
