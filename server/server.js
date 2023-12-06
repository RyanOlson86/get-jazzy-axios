const express = require('express');

const app = express();
const PORT = 5001;

// code for body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.use(express.static('server/public'));

// code for body-parser


app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
    console.log('inside /song')
    res.send(songListArray);
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

app.post('/', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`Get a POST request!`, req.body);

    // Grab the new quote from the request body
    let quote = req.body.quoteToAdd;

    // Push the quote into our array
    console.log(`Adding new quote: `, quote)
    quoteList.push(quote);

    // Send back a status code of 201
    res.sendStatus(201);
});