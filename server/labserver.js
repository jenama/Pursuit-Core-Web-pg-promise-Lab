const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors())

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

const usersRouter = require('./routes/usersRouter')
app.use('/users', usersRouter)

const postsRouter = require('./routes/postsRouter.js')

//const connectingRouter = require('./routes/connecting.js/index.js')

app.use('/posts', postsRouter)

app.use('/', (req, res) => {
     //res.send('Welcome to facebook')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})