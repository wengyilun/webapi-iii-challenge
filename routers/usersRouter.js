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

router.get('/:id', async (req, res)=>{
	console.log('get user by id is called')
	try{
		const user = await db.getById(req.params.id)
		if(user){
			res.status(200).send(user)
		}else{
			res.status(404).send({message: "user with that id cannot be found"})
		}
		console.log('user', user)
	}catch(err){
		console.log('err', err)
		res.status(500).send({error: "Problem retrieving users"})
	}
})


module.exports = router
