const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
 // console.log(res.genelayar)
  res.render('index', { title: 'Aquturk' ,static:res});

});


module.exports = router;
