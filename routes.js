const app = require('express').Router();

app.get('/', (req, res) => {
    res.render('login', {title: "Smart Meter"});
})

app.get('/home', (req, res) => {
    res.render('')
})

module.exports = app;