const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var trainer = {
    "trainer" : "ruhsane",
    "pokemon" : ["pikachu", "Mew", "Lugia" ]
}

app.get('/', (req, res) => {
    res.json(trainer)
})


if (!module.parent) {
    app.listen(port);
}

module.exports = app;
