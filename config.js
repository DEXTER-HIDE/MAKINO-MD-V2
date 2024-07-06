const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"IApfsT4xQB9lzAvbMQ0gmZNxabGMZ7f+dpY1s8OiG10="},"public":{"type":"Buffer","data":"QpnGvrHfW+EwQ7hYZFL8beo0440hq2ORonANE8XcJiM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2BiGEnjURPyyaRh2Q42yh3RHcQhAVVAM8Fzt/kJ/xW0="},"public":{"type":"Buffer","data":"ttjKWyvRJVXuvWPe+E8LaDN73QyUylnF6DIGa3AfjlQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QFm9VjYTjUlacXA/5onioOH5Ta+/MJJawh/HMQY8sGc="},"public":{"type":"Buffer","data":"lxn90/tJKMvJLaOMEsXRSWGtxmCzfQxO2tvbWomopAw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"aEeGjVb1y+GbfVtpbD3FK1weLMbxY6pYrU5jm0EloFc="},"public":{"type":"Buffer","data":"95MhP2mHset/7/xXs79ZeA3Qcr/x/b06kX1R+zuHxgk="}},"signature":{"type":"Buffer","data":"NsuhGBU6q356bZIrsWK38zMR9mFc1bnYdFue9Q+1WpWE1evtFVqSJ53mv+rAh7TFmJN7f3ByLnlmUkWIgWQdDA=="},"keyId":1},"registrationId":174,"advSecretKey":"Wis1wcH2JiZe4bnHad+mpx/qWlA6EQmyENMetg/DA4k=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"2xlHUJRBRXeFmbgFlHfhjQ","phoneId":"e937d14f-e3fb-476b-9040-54a2cd39645d","identityId":{"type":"Buffer","data":"WSycgL3OP57H2eJZTyimBHHgv94="},"registered":true,"backupToken":{"type":"Buffer","data":"V3pZqYaapw4FweSA+zZS7qOOmYQ="},"registration":{},"pairingCode":"9G5GX7DG","me":{"id":"94753574803:69@s.whatsapp.net"},"account":{"details":"CLb/9pkDEPuDpbQGGAMgACgA","accountSignatureKey":"zGq5yzRpir9w/Xfpo3i5KNLPmiCuq3vWULv78WCWGHY=","accountSignature":"4F8iw/rl8iFvh+vrWqDP7ZYx5ybwb3/BxHtc52HXu4jl5moth58WLYJeCmXpX9QM5z+a1OzjR6kuY8uM4oacDg==","deviceSignature":"DwjDMzijolD2pfbXLTzCyBqk7IUoCI6ZS8tpa0ImAGS11NEDy+Rs5v2ubBo5Nfuo8omGA1ia29bGwle/iUF8BA=="},"signalIdentities":[{"identifier":{"name":"94753574803:69@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bcxqucs0aYq/cP136aN4uSjSz5ogrqt71lC7+/Fglhh2"}}],"platform":"android","lastAccountSyncTimestamp":1720271367}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
