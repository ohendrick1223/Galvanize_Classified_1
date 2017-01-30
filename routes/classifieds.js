
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

//get all
router.get('/', function(req, res) {
  knex('classifieds')
  .select ('id', 'title', 'description', 'price', 'item_image')
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
});

//get by id

//post

//patch

//Delete



module.exports = router;
