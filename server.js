const express = require('express');
const bodyParser = require('body-parser');
const log = console.log;
const app = express();
const path = require('path');
const PORT = 8080;

// Configuring our data parsing
app.use(bodyParser.urlencoded({
    extend: true
}));
app.use(express.static('views'));

app.post('/email', (req, res) => {
    //Send an email here but currently dummy email
    console.log('Name:', req.body.name);
    console.log('Email:', req.body.email);
    console.log('Subject:', req.body.subject);
    console.log('Message:', req.body.message);
    //res.json({message: 'Message received!'})
    res.redirect('/thanks.html')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server has started on PORT:', 8080));


