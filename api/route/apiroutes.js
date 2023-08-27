const express = require('express');
const fileupload = require('express-fileupload');

const router = express.Router();

router.use(fileupload);

router.post('/upload', (req, res)=>{
	console.log(req.body)
	try {
		res.status(200).json({message:"ok"})
	} catch (error) {
		res.status(500).json({message:"error"})
	}
})