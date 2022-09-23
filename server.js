const express = require('express')
const path = require('path')

const friendsRouter = require('./routers/friends.router')
const messagesRouter = require('./routers/messages.router')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`Method: ${req.method} | URL: ${req.url} | ${delta}ms`)
})

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
    // res.send('<h1>Hello, Express!</h1>')
    res.render('index', {
        title: 'Testing rendering ...',
        caption: '... with Handlebars'
    })

})

app.use('/friends', friendsRouter.friendsRouter)
app.use('/messages', messagesRouter.messagesRouter)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})