let handler = function (m) {
  // this.sendContact(m.chat, '6288980303928', 'Indra', m)
  conn.sendContact(m.chat, '6288980303928', 'Indra', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler

//ganti aja kids
//Kalo ada yang error bisa wa
//088980303928