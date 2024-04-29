
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const app = express();
const PORT = 3000;

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
)


app.listen(PORT, () => {
    console.log(`App listen on ${PORT} port. Go to: http://localhost:${PORT}.`);
})

