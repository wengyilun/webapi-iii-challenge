const server = require('./server')
require('dotenv').config()

server.listen(process.env.PORT, ()=>{
	console.log(`server running on http://localhost/${process.env.PORT}`)
})

