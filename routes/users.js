const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});

router.post("/",(req,res,next)=>{

      const {username , password }= req.body;

})

module.exports = router;
 