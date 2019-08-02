// Just get a list of the posts
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = module.exports = new express.Router();


router.get('/', (req, res) => {
    
    let dir_posts_crypt = path.join(req.app.get('dir_target'), '_posts_crypt'),
    dir_forFile = path.join(__dirname, 'forfile-filename.js');
    
    let posts = spawn('jskey-walk', ['walk', '-t', dir_posts_crypt, '-s', dir_forFile]);
    
    let out = '';
    posts.stdout.on('data', (data) => {
        
        //console.log(data.toString());
        out += data.toString();
        
    });
    
    posts.on('close', (code) => {
        
      // res.send('_posts_crypt path: ' + dir_posts_crypt);
      res.send(out);
      
    });
    
});

