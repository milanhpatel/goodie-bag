const router = require('express').Router();
const Candy = require('../db/models/Candy')

module.exports = router;

router.get('/', async (req, res, next) => {
    try {
      const candy = await Candy.findAll();
      console.log(candy)
      res.json(candy)
    }
    catch (err) {
      console.log(err)
    }
})
