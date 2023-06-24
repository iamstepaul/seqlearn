const express = require("express")
const app = express()

const mysql = require('mysql2')

const db = require('./models')

const { User } = require("./models")

app.get('/select', (req, res) => {
    User.findAll({ where: { firstName: "John"}})
    .then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err)
    })
})

app.post('/insert', (req, res) => {
    User.create({
        firstName: "Pedro",
        age: 19,
    }).catch((err) => {
        if (err) {
            console.log(err)
        }
    })
    res.send("insert")
})

app.delete('/delete', (req, res) => {
    User.destroy({ where: { id: 10}})
    res.send('delete')
})

db.sequelize.sync().then((req) => {

app.listen(3001, () => {
    console.log('Server running')
})
})