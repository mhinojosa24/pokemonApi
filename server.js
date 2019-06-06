const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var venue = {
    "events": [{
            "band": "Smashing Pumkins",
            "date": "December 20",
            "type": "concert"
        }, {
            "band": "Slpiknot"
        }],
    "seats": 200
}

app.get('/venue', (req, res) => {
    res.json(venue)
})

app.get('/venue/seats', (req, res) => {
    res.json(venue["seats"])
})

app.get('/venue/events', (req, res) => {
    res.json(venue["events"][0])
})


if (!module.parent) {
    app.listen(port);
}

module.exports = app;
