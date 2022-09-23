const model = require('../models/friends.model')

function postFriend(req, res) {
    if (req.body.name) {
        const newFriend = {
            id: model.friends.length,
            name: req.body.name,
        }
        model.friends.push(newFriend)
        res.json(newFriend)
    } else {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
}

function getFriends (req, res) {
    res.json(model.friends)
}

function getFriend (req, res) {
    if (model.friends[Number(req.params.id)]) {
        res.status(200).json(model.friends[Number(req.params.id)])
    } else {
        return res.status(404).json({
            error: 'Friend does not exist!'
        })
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}