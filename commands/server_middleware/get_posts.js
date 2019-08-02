// Just get a list of the posts
let spawn = require('child_process'),
express = require('express'),
router = module.exports = new express.Router();


router.get('/', (req, res) => {
    
    res.send('posts path');
    
});


//module.exports = (req, res) => {

   //let walk = spawn('jskey-walk', ['-t', dir_posts_crypt])    
    
//};
