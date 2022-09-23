const path = require('path')

function getMessages (req, res) {
    // res.send('<ul><li>Helloo, Jon :)))</li></ul>')
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'image.png'))
    res.render('messages', {
        title: 'Messages to my friends!',
        friend: 'Jon'
    })
}

function postMessage (req, res) {
    res.send('Updating messages...')
}

module.exports = {
    getMessages,
    postMessage
}