const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  //console.log(res.kategori)
  res.render('index', { title: 'Aquturk' ,static:res});

});
router.get('/:seuUrl', (req, res, next)=> {


    res.render('urunler', { title: 'Aquturk' ,static:res});



});

module.exports = router;
