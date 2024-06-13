const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  BAN_CHATS: process.env.BAN_CHATS || "",
  PORT: toBool(process.env.PORT) || 8000,
  AUDIO_DATA: process.env.AUDIO_DATA || 'ᴄʜᴇᴛʜᴍɪɴᴀ;ᴄᴋ ᴏꜰᴄ ʙᴏᴛ;https://i.imgur.com/ep3UbBP.jpg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*ʜᴇʏ &sender ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ 💗*_\n\n_🔮PLATFORM: &platform_\n_⏰RUNTIME : &runtime_\n\n_.",
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_c43f_fd64_5990_1837_998b_4bb4_f2bd_a5ac',
  LANG: process.env.LANG || 'EN',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: process.env.HANDLER  || '.',
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  KOYEB_API: process.env.KOYEB_API,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  API: 'https://api.lokiser.xyz/',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'ᴄᴋ ʙᴏᴛꜱ ᴢᴏɴᴇ;2023',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  SAVE_STATUS: toBool(process.env.SAVE_STATUS) || false,
  STATUS_VIEW: process.env.STATUS_VIEW || "false",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "true"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;ᴄᴋ ᴏꜰᴄ ʙᴏᴛ;https://i.imgur.com/ltPPMTh.jpeg',
  SUDO: process.env.SUDO || '94779510013,94722770762',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || 'CK OFC Bot;Chethmina Kavishan;https://i.imgur.com/VIpl3q5.mp4',
  WORK_TYPE: process.env.WORK_TYPE || 'public',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
