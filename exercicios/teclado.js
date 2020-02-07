const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoCarne = Markup.keyboard ([

]).resize().extra()

bot.start(async ctx => {
    await ctx.reply('Seja bem-vindo, ')
})