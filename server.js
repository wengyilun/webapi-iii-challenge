// code away!
const userRoute = require('./routers/usersRouter')
const postRoute = require('./routers/postsRouter')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(morgan())
server.use('/api/users', toUppercase(), userRoute)
server.use('/api/posts', postRoute)

function toUppercase(){
	return function (req, res, next){
		if(req.method === "POST"){
			console.log('req.')
			req.body.name = req.body.name.toUpperCase()
		}
		next()
	}
}

server.get('/', (req, res)=>{
	res.status(200).end('Welcome')
})


function errorHandler( err, req, res, next){
	res.status(400).send("Bad Panda")
}



module.exports = server
