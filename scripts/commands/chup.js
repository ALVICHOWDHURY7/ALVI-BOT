const fs = require("fs");
module.exports.config = {
	name: "Cup",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  premium: false,
  prefix: true,
	commandCategory: "Không cần dấu lệnh",
	usages: "Cup",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  let bot = ['61551846081032'];
	if (event.body.indexOf("bot cup")==0 || event.body.indexOf("Bot cup")==0 || event.body.indexOf("Bot chup")==0 || event.body.indexOf("cup")==0 ||event.body.indexOf("Cup")==0 || event.body.indexOf("Chup")==0 || event.body.indexOf("chup")==0 || event.body.indexOf("চুপ")==0 ||event.body.indexOf("বুট চুপ")==0 || event.body.indexOf("Chup bot")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n-ওই চুপ বেশি বুঝো 🫵তুমি-🤫😒\n╰──────•◈•───────╯",
				attachment: fs.createReadStream(__dirname + `/noprefix/chup.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
