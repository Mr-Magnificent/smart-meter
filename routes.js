const app = require('express').Router();

app.get('/', (req, res) => {
    console.log("Hello world");
    res.render('test', {title: "WOW"});
})

module.exports = app;