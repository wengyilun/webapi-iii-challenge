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

router.post('/', async (req, res)=>{
	console.log('insert post is called')
	try{
		if(!req.body.text || !req.body.user_id){
			res.status(400).send({message: "post's text and user_id field cannot be left blank"})
		}
		
		const post = await db.insert(req.body)
		res.status(201).send(post)
		
		console.log('post', post)
	}catch(err){
		console.log('err', err)
		res.status(500).send({error: "Problem adding users"})
	}
})

router.put('/:id', async (req, res)=>{
	console.log('update post is called')
	try{
		if(!req.body.text || !req.body.user_id){
			res.status(400).send({message: "post's text and user_id field cannot be left blank"})
		}
		const post = await db.update(req.params.id, req.body)
		if(post){
			res.sendStatus(200).send(post)
		}else{
			res.sendStatus(404).send({message: "Unable to update post with this post id"})
		}
		console.log('post', post)
	}catch(err){
		console.log('err', err)
		res.sendStatus(500).send({error: "Problem updating this post"})
	}
})

router.delete('/:id', async (req, res)=>{
	console.log('delete post is called')
	try{
		const post = await db.remove(req.params.id)
		if(post > 0){
			res.sendStatus(200).send(post)
		}else{
			res.sendStatus(404).send({message: "Unable to delete post with this post id"})
		}
		console.log('post', post)
	}catch(err){
		console.log('err', err)
		res.sendStatus(500).send({error: "Problem deleting this post"})
	}
})



module.exports = router
