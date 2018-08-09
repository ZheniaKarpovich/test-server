const express = require('express')
const bodyParser = require('body-parser')
const TelegramBot = require('node-telegram-bot-api')
const path = require('path')


let app = new express();
let port = 8080;
// replace the value below with the Telegram token you receive from @BotFather
const token = '685525877:AAH799Lns70AHqxv7SdukgNWAhx-GhNWM24';


const bot = new TelegramBot(token, {polling: true});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.route("/addFile") 
    .get((req,res) => {
        console.log('get addFile');
        res.status(200).json({hey: '2sdfsd'});
    })

    .post((req,res) => {
        console.log('post addFile');
        res.status(400).json({hey: '2sdfsd'});
    });

app.route("/editFile") 
    .get((req,res) => {
        
    })

    .post((req,res) => {
        console.log('post editFile');
    });


app.route("/deleteFile")
    .get((req,res) => {

    })
    .post((req,res) => {
        console.log('post deleteFile');
    });

app.route("/share")
    .get((req,res) => {

    })
    .post((req,res) => {
        console.log('post shareFile');
        console.log(req.body);
        //получение нужного файла с бд  req.body.userId req.body.fileId
        //    bot.sendDocument(req.body.chatId, doc);
        bot.sendMessage(req.body.chatId, 'doc').then((resolve) => {
        //    console.log(resolve);
        });
        res.status(200).json({});
    });


bot.onText(/\/start/, (msg, match) => {
    
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, `Your chatId: ${chatId}. Put this code on site and you will get your file :)`);
  });



app.listen(port, (error)=>{
    if(error) {
        console.error(error);
    } else {
        console.info("==> listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
})