const express = require('express');
const multer = require('multer'); // multer use for the form data for mate dekha ne keliya 
const uploadfile = require('../services/storage.service');
const router = express.Router()


const upload = multer({storage:multer.memoryStorage()})




router.post('/songs',upload.single('audio') , async (req, res) => {
   
    console.log(req.body)
    console.log(req.file)
    const filedata = await uploadfile(req.file);
    console.log(filedata)
    res.status(201).json({
        message:"song created succefuly",
        song:req.body,
    })
})


module.exports = router;