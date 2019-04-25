// code away!
const userRoute = require('./routers/usersRouter')
const postRoute = require('./routers/postsRouter')
const cors = require('cors')
const express = require('express')
// const helmet = require('helmet')
// const morgan = require('morgan')

const server = express()

server.use(express.json())

server.use('/api/users', userRoute)
server.use('/api/posts', postRoute)

// server.use(helmet())
// server.use(morgan())

server.get('/', (req, res)=>{
	res.status(200).end('Welcome')
})

module.exports = server
