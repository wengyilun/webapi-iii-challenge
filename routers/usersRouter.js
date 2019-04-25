const express = require('express')

const router = express.Router()

const db = require('../data/helpers/userDb')

router.get('/', async (req, res)=>{
	console.log('get users is called')
	try{
		const users = await db.get()
		res.status(200).send(users)
		console.log('users', users)
	}catch(err){
		console.log('err', err)
	}
})


module.exports = router
