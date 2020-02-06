const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    const from = ctx.update.message.from
    await ctx.reply(`Seja bem-vindo, ${from.first_name} 😍`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
        <i> de várias</i> <code>formas</code> <pre>possíveis</pre>
        <a href="http://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown* '
        + '_de várias_ `formas` ```possíveis```'
        + '[Google](http://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/cat.jpg`})
    await ctx.replyWithPhoto('https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        { caption: 'Olha o estilo!'})
    await ctx.replyWithLocation(29.9773008, 31.1303068)
})

bot.startPolling()