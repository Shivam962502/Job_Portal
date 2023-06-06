const express = require('express');
const app = express();
const router = require('./router/userRouter')
const cors = require('cors')

//dotenv Config
require('dotenv').config()
const PORT = process.env.PORT

app.use(cors())

app.use('/upload', express.static(__dirname + '/upload'))

//database
const db = require('./db/dataHase');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.send('Hello Homepage!')
})


//Router
app.use('/api',router)

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));