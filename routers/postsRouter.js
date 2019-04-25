const express = require('express')

const router = express.Router()

const db = require('../data/helpers/postDb')

router.get('/', async (req, res)=>{
	console.log('get posts is called')
	try{
	   const posts = await db.get()
	   res.status(200).send(posts)
	   console.log('posts', posts)
	}catch(err){
		console.log('err', err)
		res.status(500).send({error: "Problem retrieving posts"})
	}
})

router.get('/:id', async (req, res)=>{
	console.log('get posts is called')
	try{
	   const post = await db.getById(req.params.id)
	   if(post){
		   res.status(200).send(post)
	   }else{
		   res.status(404).send({message: "Post with that id cannot be found"})
	   }
	   console.log('post', post)
	}catch(err){
		console.log('err', err)
		res.status(500).send({error: "Problem retrieving posts"})
	}
})

module.exports = router
