//========= alive command ===========
const config = require('../../config')
const {cmd , commands} = require('../../command')



//============= menu command ================

const os = require("os")
const {runtime} = require('../functions')
const {sleep} = require('../functions')

cmd({
    pattern: "alive",
    react: "👋",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc`╔═══════✮❁•°♛°•❁✮════════╗
𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝐀𝐋𝐈𝐕𝐄
❖◦ *ʙᴏᴛ ɴᴀᴍᴇ* : ᴅᴀʀᴋ_Qᴜᴇᴇɴ
❖◦ *ᴄʀᴇᴀᴛᴏʀ* : ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ
❖◦ *ᴠᴇʀsɪᴏɴs* : 1 
ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ *ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ* ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ *ᴡʜᴀᴛꜱᴀᴘᴘ.🪀* 
ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ
*𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.*
*𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.* 
*𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.*
*𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.* 
*Channel:* https://whatsapp.com/channel/0029Vb1AB158F2pCzMyd8O1B
🌟 𝕋𝕪𝕡𝕖 .𝕞𝕖𝕟𝕦 𝕋𝕠 𝔾𝕖𝕥 𝔹𝕠𝕥 𝕌𝕤𝕖𝕣 𝕄𝕖𝕟𝕦
> *©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*
╚═══════✮❁•°♛°•❁✮════════╝`

return await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/l2ofp9.jpg`}, caption: desc }, { quoted: mek })
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🔃",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return;
const {exec} = require("child_process")
reply("restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📃",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭═「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰═══════════════○●►*
*╭────────────────○●►*
*┃「𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑴𝑬𝑵𝑼」*
*╰────────────────○●►*
*╭───────────────○●►*
*╎ 01 OWNER*
*╎ 02 CONVERT*
*╎ 03 AI*
*╎ 04 SEARCG*
*╎ 05 DOWNLOAD* 
*╎ 06 FUN*
*╎ 07 MAIN*
*╎ 08 GROUP*
*╎ 09 OTHER*
*╎ 10 TOOL*
*╰───────────────○●►*
*╭─ 「𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵」*
*╰───────────────○●►*

🌟 ℝ𝔼ℙ𝕃𝕐 𝕥𝕙𝕖 ℕ𝕒𝕞𝕓𝕖𝕣 𝕐𝕠𝕦 𝕨𝕒𝕟𝕥 𝕥𝕠 𝕤𝕖𝕝𝕖𝕔𝕥

💻 *GitHub:* 

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb1AB158F2pCzMyd8O1B

> 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 - : ©ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/m27q4s.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──OWNER MENU──╼◈*

╭────────●●►
│ • *restart* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '2':               
                        reply(`*◈╾──CONVERT MENU──╼◈*

╭────────●●►
│ • *convert* 
╰──────────────────●●►
╭────────●●►
│ • *currency* 
╰──────────────────●●►
╭────────●●►
│ • *url* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '3':               
                        reply(`*◈╾──AI MENU──╼◈*

╭────────●●►
│ • *ai* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '4':               
                        reply(`*◈╾──SEARCH MENU──╼◈*

╭────────●●►
│ • *yts* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '5':               
                        reply(`*◈╾──DOWNLOAD MENU──╼◈*

╭────────●●►
│ • *apk* 
╰──────────────────●●►
╭────────●●►
│ • *xvideo* 
╰──────────────────●●►
╭────────●●►
│ • *song* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '6':               
                        reply(`*◈╾──FUN MENU──╼◈*


╭────────●●►
│ • *animegirl* 
╰──────────────────●●►
╭────────●●►
│ • *dog* 
╰──────────────────●●►
╭────────●●►
│ • *joke* 
╰──────────────────●●►
╭────────●●►
│ • *hack* 
╰──────────────────●●►
╭────────●●►
│ • *quote* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '7':               
                        reply(`*◈╾──MAIN MENU──╼◈*

╭────────●●►
│ • *alive* 
╰──────────────────●●►
╭────────●●►
│ • *owner* 
╰──────────────────●●►
╭────────●●►
│ • *menu* 
╰──────────────────●●►
╭────────●●►
│ • *allmenu* 
╰──────────────────●●►
╭────────●●►
│ • *repo* 
╰──────────────────●●►
╭────────●●►
│ • *system* 
╰──────────────────●●►
╭────────●●►
│ • *ping* 
╰──────────────────●●►
╭────────●●►
│ • *runtime* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU──╼◈*

╭────────●●►
│ • *promote* 
╰──────────────────●●►
╭────────●●►
│ • *demote* 
╰──────────────────●●►
╭────────●●►
│ • *kick* 
╰──────────────────●●►
╭────────●●►
│ • *add* 
╰──────────────────●●►
╭────────●●►
│ • *admins* 
╰──────────────────●●►
╭────────●●►
│ • *grouplink* 
╰──────────────────●●►
╭────────●●►
│ • *groupinfo* 
╰──────────────────●●►
╭────────●●►
│ • *setwelcome* 
╰──────────────────●●►
╭────────●●►
│ • *setgoodbye* 
╰──────────────────●●►
╭────────●●►
│ • *groupdesc* 
╰──────────────────●●►
╭────────●●►
│ • *gname* 
╰──────────────────●●►
╭────────●●►
│ • *setsubject* 
╰──────────────────●●►
╭────────●●►
│ • *tagall* 
╰──────────────────●●►
╭────────●●►
│ • *requests* 
╰──────────────────●●►
╭────────●●►
│ • *accept* 
╰──────────────────●●►
╭────────●●►
│ • *reject* 
╰──────────────────●●►
╭────────●●►
│ • *approve* 
╰──────────────────●●►
╭────────●●►
│ • *poll* 
╰──────────────────●●►
╭────────●●►
│ • *getpic* 
╰──────────────────●●►
╭────────●●►
│ • *mute* 
╰──────────────────●●►
╭────────●●►
│ • *unmute* 
╰──────────────────●●►
╭────────●●►
│ • *lock* 
╰──────────────────●●►
╭────────●●►
│ • *hidetag* 
╰──────────────────●●►
╭────────●●►
│ • *unlock* 
╰──────────────────●●►
╭────────●●►
│ • *del* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '9':               
                        reply(`*◈╾──OTHER MENU──╼◈*

╭────────●●►
│ • *weather* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);

                        break;
                    case '10':               
                        reply(`*◈╾──TOOLS MENU──╼◈*

╭────────●●►
│ • *calc* 
╰──────────────────●●►
╭────────●●►
│ • *translate* 
╰──────────────────●●►
╭────────●●►
│ • *reverse* 
╰──────────────────●●►
╭────────●●►
│ • *tempmail* 
╰──────────────────●●►
╭────────●●►
│ • *checkmail* 
╰──────────────────●●►
╭────────●●►
│ • *delmail* 
╰──────────────────●●►
╭────────●●►
│ • *encode* 
╰──────────────────●●►
╭────────●●►
│ • *decode* 
╰──────────────────●●►
╭────────●●►
│ • *npmstalk* 
╰──────────────────●●►
╭────────●●►
│ • *iplookup* 
╰──────────────────●●►
╭────────●●►
│ • *instastalk* 
╰──────────────────●●►
╭────────●●►
│ • *githubuser* 
╰──────────────────●●►
╭────────●●►
│ • *password* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `*📍REPO LINK ❤️‍🔥👇*

🩷◦ https://github.com/manisha-Official18

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/myvxa5.jpg`},caption:desc},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})



cmd({
    pattern: "owner",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

   let desc = `
*👨‍💻 DARK_QUEEN 👨‍💻*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*
*⚡ɴᴜᴍʙᴇʀ* -: 94721551183
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029Vb1AB158F2pCzMyd8O1B

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`

await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/rxxvmn.jpg`},caption:desc},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
      pattern: "runtime",
      desc: "Chek Bot Runtime",
      category: "main",
      react: "⏰",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {

let desc = `*🚀 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${uptime}*`

await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/3jw4io.jpg`}, caption: desc }, { quoted: mek });


}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {

          let desc = `*DARK_QUEEN SYSTEM INFORMATION*

*⏰𝖱𝗎𝗇𝗍𝗂𝗆𝖾:-  ${runtime(process.uptime())}*    
*📟𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*⚙️𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆:- ${os.hostname()}*
*👨‍💻𝖮𝗐𝗇𝖾𝗋:- ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*   
*🖥️𝖵𝖾𝗋𝗌𝗂𝗈𝗇:- 1*
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`

 await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/6731et.jpg`, caption: desc }, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*ᴅᴀʀᴋ_Qᴜᴇᴇɴ*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `🚀 𝗽𝗶𝗻𝗴 : ${ping}ms` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})




cmd({
    pattern: "allmenu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',
search: '',
ai: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
}
}

let madeMenu = ` *👋 Hello ${pushname}*

✨𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑴𝑬𝑵𝑼✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ :manisha
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 1
╰──────────●●►
╭──────────●●►
📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
${menu.download}
╰───────────●●►
╭──────────●●►
👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
${menu.ai}
╰───────────●●►
╭──────────●●►
🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
${menu.main}
╰───────────●●►
╭──────────●●►
🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
${menu.fun}
╰───────────●●►
╭──────────●●►
🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
${menu.convert}
╰───────────●●►
╭──────────●●►
🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
${menu.search}
╰───────────●●►
╭──────────●●►
👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
${menu.group}
╰───────────●●►
╭──────────●●►
🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
${menu.owner}
╰───────────●●►
╭──────────●●►
⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
${menu.other}
╰───────────●●►
╭──────────●●►
🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
${menu.tools}
╰───────────●●►
*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*
`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/0occok.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`Error`)
}
})
