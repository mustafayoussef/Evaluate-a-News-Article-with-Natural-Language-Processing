var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 8000;

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route
app.post('/api', async (req, res) => {
    const { url } = req.body;

    const apiURL = `https://api.meaningcloud.com/sentiment-2.1`;
    const API_ID = process.env.API_ID;
    const API_KEY = process.env.API_KEY;

    // API request body
    const body = {
        key: API_KEY,
        txt: url,
        lang: 'en'
    };

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(body),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error calling API:', error);
        res.status(500).send('Error processing request');
    }
});


// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8000!');
});


