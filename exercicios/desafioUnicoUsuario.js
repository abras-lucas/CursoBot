const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    if(from.id == x){
        ctx.reply(`Olá, mestre!`)
    }else(
        ctx.reply(`Desculpa, mas só falo com meu mestre!`)
    )
})

bot.startPolling()