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

router.post('/', async (req, res)=>{
	console.log('insert user is called')
	try{
		if(!req.body.name){
			res.status(400).send({message: "User's name field cannot be left blank"})
		}
		const user = await db.insert(req.body)
		res.status(201).send(user)
		
		console.log('user', user)
	}catch(err){
		console.log('err', err)
		res.status(500).send({error: "Problem adding post"})
	}
})



module.exports = router
