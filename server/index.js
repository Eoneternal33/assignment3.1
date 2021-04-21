const express = require('express');
const app = express();
const PORT = 5001;

app.get('*', (req, res) => {
    res.send('listening on PORT 5001')
    console.log(res.send)
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});