const express = require('express');
const router = express.Router();
const { System_users } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const libraryCardData = await System_users.findAll();
      res.status(200).json(libraryCardData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });
  


  module.exports = router;
