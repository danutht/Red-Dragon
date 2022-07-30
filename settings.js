//════════════(00)════════════════\\
//
//          WHITE EAGLE v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is ☲⃞🇦🇴⃟ᵂᴴᴵᵀᴱ⃧⃝⚈⃝𝗘𝗔𝗚𝗟𝗘⃝☫⃞🍁 BOT
My Creator is ⃞🍁⃝𝗗anuth⃞🇦🇴⃞Thamodya☲⃝` //Costomize Alive Message (type your message in `` )

global.owner = ['+94714613443'] //Owner number in aive msg
global.premium = ['+94714613443'] //Owner Number info
global.ownernomer = '+94714613443' //Owner Number <<<

global.ownername = '⃞🍁⃝𝗗anuth⃞🇦🇴⃞Thamodya☲⃝' //Owner Name
global.botname = ' ☲⃞🇦🇴⃟ᵂᴴᴵᵀᴱ⃧⃝⚈⃝𝗘𝗔𝗚𝗟𝗘⃝☫⃞🍁' //Bot Name

global.button = '☰ CONTACT INBOX ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://wa.me/+94770852794' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☲⃞🇦🇴⃟ᵂᴴᴵᵀᴱ⃧⃝⚈⃝𝗘𝗔𝗚𝗟𝗘⃝☫⃞🍁' //Bot Pacage Name
global.author = '⃞🍁⃝𝗗anuth⃞🇦🇴⃞Thamodya☲⃝' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'ඇඩ්මින්ලට විතරයි බන්!😉',
    botAdmin: 'මට ඇඩ්මින් ඔනේ...😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
