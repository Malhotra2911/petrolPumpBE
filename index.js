const express = require('express');
const cors = require('cors');
const config = require('./src/config/config');
require('./src/db/db-connection');
const routes = require("./src/routes/v1")

const app = express()
const port = config.port;

app.use(cors())
app.use(express.json())

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})