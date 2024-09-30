var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require("path");

const pindropRes =  fs.readFileSync(path.resolve(__dirname, "../utils/pindropSimulation.json"),{encoding : 'UTF-8'})
const pindropJson = JSON.parse(pindropRes)

const pegaPindropRes =  fs.readFileSync(path.resolve(__dirname, "../utils/pegaPindropSimulation.json"),{encoding : 'UTF-8'})
const pegaPindropJson = JSON.parse(pegaPindropRes)

let counter = 1;
const maxlength = 24;


/* GET home page. */
router.get('/pindrop', function(req, res, next) {
  const result = pindropJson[counter];
  counter = (counter === maxlength) ? 1 : ++counter ;
  console.log("counter-----"+ counter)
  return res
  .status(200)
  .type('application/json')
  .send(result)

});

/* GET home page. */
router.get('/pegaPindrop', function(req, res, next) {
  const result = pegaPindropJson[counter];
  counter = (counter === maxlength) ? 1 : ++counter ;
  console.log("counter-----"+ counter)
  return res
  .status(200)
  .type('application/json')
  .send(result)

});

module.exports = router;
