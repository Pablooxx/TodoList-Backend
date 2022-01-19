require('dotenv').config()
'use-strict'
console.log('Load dependencies');
const express = require('express');
const { dbConnect } = require('./config/mongo');
const routes = require('./app/routes/routes');
const PORT = process.env.PORT;

const { Router } = express;
const app = express();
const router = Router();

app.use(express.json())

app.use('/api', router);

routes(router);

router.get('/' , (req, res) => {
    res.json({
        message: 'Hellow Api'
    })
})
app.use(router);

dbConnect()

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})