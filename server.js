const express = require('express');
const app = express();
const router = require('./router/userRouter')
const cors = require('cors')

//dotenv Config
require('dotenv').config()
const PORT = process.env.PORT

app.use(cors())

app.use(express.static(__dirname + '/upload'))

//database
const db = require('./db/dataHase');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//Router
app.use('/api',router)
app.use('/employer',require('./router/empolyeRoutes'))

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));