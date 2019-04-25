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
	}
})

module.exports = router
