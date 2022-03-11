const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Yay the Server is on!');
})

module.exports = router;