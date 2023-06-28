let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐜𝐯𝐦_𝐢𝐬𝐦𝐚𝐚_𝐛𝐫: ${pesan}`
let teks = `💙🩷 DESPIERTEN CHICOS 💜 \n\n❏ ${oi}\n❏ 👨🏻‍💻💙𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `💜💙🩷 @${mem.id.split('@')[0]}\n`}
teks += `➥BOT DE HUESITO☠️`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
