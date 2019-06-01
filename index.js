const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.engine('hbs', hbs({
    extname: 'hbs', 
    defaultLayout: 'layout', 
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', routes);

app.listen(PORT, () => {
    console.log('App listening on port', PORT);
})