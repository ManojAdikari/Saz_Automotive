const express = require('express');
const router = express.Router();
const {System_users}  = require('../../models');
const Vehicals = require('../../models/Vehicals');
const connection = require('../../config/connection')
const multer = require("multer");
const moment = require("moment")







// img storage confing
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowd"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});

// register userdata   




  router.post('/SaveVehical', async (req, res) => {
    try {
        
      const readerData = await Vehicals.create(req.body);
      res.status(200).json(readerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
